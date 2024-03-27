const { supabase } = require('../createClient');

const readFoods = async (req, res) => {
    try {
        const { data } = await supabase
            .from('newAdd')
            .select('*')
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const readFoodbyId = async (req, res) => {
    try {
        const { ID } = req.params;
        const { data } = await supabase
            .from('newAdd')
            .select()
            .eq('id', ID);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const readFoodbyName = async (req, res) => {
    try {
        const { NAME } = req.params
        const { data } = await supabase
            .from('newAdd')
            .select()
            .eq('name', NAME);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createFood = async (req, res) => {
    try {
        const { addDate, experationDate, name, amount } = req.body;
        const { data, error } = await supabase
            .from("newAdd")
            .insert({
                addDate: addDate,
                experationDate: experationDate,
                amount: amount,
                name: name
            });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    readFoods, readFoodbyId, readFoodbyName, createFood
}