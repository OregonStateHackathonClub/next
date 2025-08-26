import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const StepOne = () => {
  const [email, setEmail] = useState('');
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const searchDB = async () => {
    if (!email) {
      setError('Please enter an email.');
      return;
    }

    if (names.length >= 4) {
      setError('You can only select up to 4 team members.');
      return;
    }

    console.log('API call initiated with email:', email);

    try {
        const response = await fetch('/api/getName', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();
        console.log('API response:', data)

        if (!response.ok) {
            setError(data.error || 'Error has occured');
        } else {
            // Append name to list
            setNames((prevNames) => [...prevNames, data.name]);
            setError(null);
            setEmail(''); // Clears input
        }
    } catch (err) {
        console.error(err);
        setError('Failed to fetch data from backend.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchDB();
    }
  };

  // Optionally: remove a member
  const removeName = (index: number) => {
    setNames((prev) => prev.filter((_, i) => i !== index));
    setError(null);
  };

  return (
    <div className = "pt-60 px-8 max-w-2xl mx-auto w-full">
        <h2 className="text-white-3xl font-bold mb-2 text-left">
          1 → Select your team members 
        </h2>
        <p className="text-gray-600 mb-8 pl-8 text-left">
          Please only submit one proposal per team
        </p>

        {/* Form for selecting team members will go here */}
        <div className = "text-left">
          <h3 className="text-white-3xl font-bold mb-2 pl-8 text-left">
              Select up to 4 people 
          </h3>

          {/* <form> */}
            {/* Search Field */}
            <div className="relative w-2/3 mb-4 ml-8">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="example@email.com"
              />

              <button
                type="button"
                onClick={searchDB}
                className="absolute right-1 top-1/2 transform custom-translate-search-icon"
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {error && <p className="text-red-500 ml-8">{error}</p>}

            {names.length > 0 && (
              <div className="ml-8 mt-2 w-2/3">
                <h3 className="font-bold mb-1">Team Members:</h3>
                <div className="flex flex-col gap-2">
                  {names.map((name, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-200 text-gray-800 px-3 py-1 rounded shadow-sm w-full">
                      <span>{name}</span>
                      <button 
                        type="button"
                        onClick={() => removeName(index)}
                        className="ml-2 text-red-500 hover:text-red-700 font-bold"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                

                {/* Debug button */}
                {/* <button
                  type="button"
                  onClick={() => console.log('Current names:', names)}
                  className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Print Names
                </button> */}

              </div>
            )}

        </div>        
    </div>
  );
};
