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
        const { addTime, expireTime, name, amount, groupEmoji } = req.body;
        const { data, error } = await supabase
            .from("newAdd")
            .insert({
                addTime: addTime,
                expireTime: expireTime,
                amount: amount,
                name: name,
                groupEmoji: groupEmoji
            });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateFood = async (req, res) => {
    try {
        const { ID } = req.params;
        const { addTime, expireTime, name, amount, groupEmoji } = req.body;

        const { data, reeor } = await supabase
            .from('newAdd')
            .update({
                addTime: addTime,
                expireTime: expireTime,
                amount: amount,
                name: name,
                groupEmoji: groupEmoji
            })
            .eq('id', ID)
        res.status(200).json(data);
    } catch {
        res.status(500).json({ message: error.message });
    }
};
const deleteFood = async (req, res) => {
    try {
        const { ID } = req.params;
        const { error } = await supabase
            .from('newAdd')
            .delete()
            .eq('id', ID)
            res.status(200).send("delete!")
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    readFoods, readFoodbyId, readFoodbyName, createFood, updateFood, deleteFood
}