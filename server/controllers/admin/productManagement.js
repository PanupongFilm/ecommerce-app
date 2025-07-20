import Product from '../../models/product/product.js';

const createProduct = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.price) return res.status(400).json({ message: "Name and price are required" });
        const productNameCheck = await Product.findOne({ name: req.body.name });
        if (productNameCheck) return res.status(409).json({ message: "Product name is already taken" });

        await new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description || '',
            stock: req.body.stock || 1,
            imgs: req.body.imgs

        }).save();

        return res.status(201).json({ message: "Create product successfully" });

    } catch (error) {
        console.error("Error form /server/controllers/admin/product.js: " + error);
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Product id is required" });

        const currentProduct = await Product.findById(req.body._id);
        if (!currentProduct) return res.status(404).json({ message: "Product not found" });

        if (req.body.name && req.body.name !== currentProduct.name) {
            const productNameCheck = await Product.findOne({ name: req.body.name });
            if (productNameCheck) return res.status(409).json({ message: "Product name is already taken" });
        }

        const data = { ...req.body };
        delete data._id;

        Object.assign(currentProduct, data);
        await currentProduct.save();

        return res.status(200).json({ message: "Update product successfully" });

    } catch (error) {
        console.error("Error form /server/controllers/admin/product.js: " + error);
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {

    } catch (error) {
        console.error("Error form /server/controllers/admin/product.js: " + error);
        next(error);
    }
};

const getAllProduct = async (req, res, next) => {
    try {

    } catch (error) {
        console.error("Error form /server/controllers/admin/product.js: " + error);
        next(error);
    }
};


export { createProduct, updateProduct, deleteProduct, getAllProduct };
