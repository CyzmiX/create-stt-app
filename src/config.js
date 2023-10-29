const config = [
    {
        type: 'input',
        name: 'dir',
        message: 'Where do you want to make your project? (enter for current directory) > '
    },
    {
        type: 'password',
        name: 'supabaseURL',
        message: 'Enter in your supabase project URL > ',
    },
    {
        type: 'password',
        name: 'supabaseKey',
        message: 'Enter in your supabase project anon key > ',
    },
    {
        type: 'list',
        name: 'ts',
        message: 'use TypeScript?',
        choices: ['yes', 'no']
    },
    {
        type: 'list',
        name: 'tailwind',
        message: 'use Tailwind?',
        choices: ['yes', 'no'] 
    }
]
export default config