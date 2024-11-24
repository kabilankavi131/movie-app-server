const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY


const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);


const searchMovies = async (req, res) => {

    console.log(req.query);



    const { data, error } = await supabase
        .from('movies')
        .select('*')
        .like('title', `%${req.query.movie}%`);

    if (error) {
        console.error('Error:', error);
        return res.send(error);
    } else {
        console.log('Data:', data);
        return res.send(data);
    }
};

module.exports = { searchMovies };  