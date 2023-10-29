import inquirer from 'inquirer'
import config  from './src/config.js'
import chalk from 'chalk';


inquirer.prompt(config).then(val => {

    if (!val.supabaseUrl || !val.supabaseKey) {
        console.error('\x1b[4m\x1b[41m\x1b[37mSupabase crendatials are incorect!');
        return
    }
})