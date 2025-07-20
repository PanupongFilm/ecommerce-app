import Category from "../../models/product/category";
import Type from "../../models/product/type";
import Tag from "../../models/product/tag";

const nameValidation = async (nameInput, mode) => {
    try {
        let nameCheck;

        if (mode === 'category') {
            nameCheck = await Category.findOne({ name: nameInput });
        }
        else if (mode === 'type') {
            nameCheck = await Type.findOne({ name: nameInput });
        }
        else if (mode === 'tag') {
            nameCheck = await Tag.findOne({ name: nameInput });
        }
        if (nameCheck) {
            return true
        }

        return false

    } catch (error) {
        throw error;
    }
}


//Category
const createCategory = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ message: "Category name is required" });
        const check = await nameValidation(req.body.name, 'category');
        if (check) return res.status(409).json({ message: 'Category name is already taken' });

        await new Category({
            name: req.body.name,
            img: req.body.img || ''

        }).save();

        return res.status(201).json({ message: "Create a category successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createCategory: ", error);
        next(error);
    }
}

const DeleteCategory = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Category id is required" });

        const currentCategory = await Category.findByIdAndDelete(req.body._id);
        if (!currentCategory) return res.status(404).json({ message: "Category not found, Delete was failed" });

        return res.status(200).json({ message: "Delete successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at DeleteCategory: ", error);
        next(error);
    }
}

const UpdateCategory = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Category id is required" });

        const currentCategory = await Category.findById(req.body._id);
        if (!currentCategory) return res.status(404).json({ message: "Category not found" });

        if (req.body.name && req.body.name !== currentCategory.name) {
            const check = await nameValidation(req.body.name, 'category');
            if (check) return res.status(409).json({ message: 'Category name is already taken' });
        }

        const data = { ...req.body };
        delete data._id;

        Object.assign(currentCategory, data);
        await currentCategory.save();

        return res.status(200).json({ message: "Update successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at UpdateCategory: ", error);
        next(error);
    }
}


//Type
const createType = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ message: "Type name is required" });
        const check = await nameValidation(req.body.name, 'type');
        if (check) return res.status(409).json({ message: 'Type name is already taken' });

        await new Type({
            name: req.body.name,
            img: req.body.img || ''

        }).save();

        return res.status(201).json({ message: "Create a type successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createType: ", error);
        next(error);
    }
}

const DeleteType = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Type id is required" });

        const currentType = await Type.findByIdAndDelete(req.body._id);
        if (!currentType) return res.status(404).json({ message: "Type not found, Delete was failed" });

        return res.status(200).json({ message: "Delete successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at DeleteType: ", error);
        next(error);
    }
}

const UpdateType = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Type id is required" });

        const currentType = await Type.findById(req.body._id);
        if (!currentType) return res.status(404).json({ message: "Type not found" });

        if (req.body.name && req.body.name !== currentType.name) {
            const check = await nameValidation(req.body.name, 'type');
            if (check) return res.status(409).json({ message: 'Type name is already taken' });
        }

        const data = { ...req.body };
        delete data._id;

        Object.assign(currentType, data);
        await currentType.save();

        return res.status(200).json({ message: "Update successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at UpdateType: ", error);
        next(error);
    }
}


//Tag
const createTag = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json({ message: "Tag name is required" });
        const check = await nameValidation(req.body.name, 'tag');
        if (check) return res.status(409).json({ message: 'Tag name is already taken' });

        await new Tag({
            name: req.body.name,

        }).save();

        return res.status(201).json({ message: "Create a tag successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createTag: ", error);
        next(error);
    }
}

const DeleteTag = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Tag id is required" });

        const currentTag = await Tag.findByIdAndDelete(req.body._id);
        if (!currentTag) return res.status(404).json({ message: "Tag not found, Delete was failed" });

        return res.status(200).json({ message: "Delete successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at DeleteTag: ", error);
        next(error);
    }
}

const UpdateTag = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Tag id is required" });
        if (!req.body.name) return res.status(400).json({ message: "New tag name is required" });

        const currentTag = await Tag.findById(req.body._id);
        if (!currentTag) return res.status(404).json({ message: "Tag not found" });

        if (req.body.name && req.body.name !== currentTag.name) {
            const check = await nameValidation(req.body.name, 'tag');
            if (check) return res.status(409).json({ message: 'Tag name is already taken' });
        }

        currentTag.name = req.body.name;
        await currentTag.save();

        return res.status(200).json({ message: "Update successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at UpdateTag: ", error);
        next(error);
    }
}