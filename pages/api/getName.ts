import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../src/lib/prisma';
import { error } from "console";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            const profile = await prisma.nextProfile.findUnique({
                where: { email: email },
            });

            if (profile) {
                console.log(profile.name);
                res.status(200).json({ name: profile.name });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed'});
    }
}

// type ResponseData = {
//     message: string
// }

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     res.status(200).json({ message: 'Testing from stepone.ts'})
// }