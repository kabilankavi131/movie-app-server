const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY


const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);


const getMoviesData = async (req, res) => {
    console.log(req);

    const { data, error } = await supabase
        .from('movies')
        .select('*');

    if (error) {
        console.error('Error:', error);
        return res.send(error);
    } else {
        console.log('Data:', data);
        return res.send(data);
    }

    return data;
};

module.exports = { getMoviesData };