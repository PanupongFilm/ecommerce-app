import Category from "../../models/product/category.js";
import Type from "../../models/product/type.js";
import Tag from "../../models/product/tag.js";

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
            img: req.body.img,
            imgPublicId: req.body.imgPublicId

        }).save();

        return res.status(201).json({ message: "Create a category successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createCategory: ", error);
        next(error);
    }
}

const deleteCategory = async (req, res, next) => {
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

const updateCategory = async (req, res, next) => {
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

const getAllCategories = async(req,res,next)=>{
    try{
        const allCategories = await Category.find();
        return res.status(200).json({message:"Get all categories successfully",categories: allCategories});

    }catch(error){
        console.error("Error from /server/controllers/admin/categoryManagement.js at getAllCategories: ",error);
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
            img: req.body.img,
            imgPublicId: req.body.imgPublicId,
            category: req.body.categoryId

        }).save();

        return res.status(201).json({ message: "Create a type successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createType: ", error);
        next(error);
    }
}

const deleteType = async (req, res, next) => {
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

const updateType = async (req, res, next) => {
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

const getAllTypes= async(req,res,next)=>{
    try{
        const allTypes = await Type.find();
        return res.status(200).json({message:"Get all types successfully",types: allTypes});

    }catch(error){
        console.error("Error from /server/controllers/admin/categoryManagement.js at getAllTypes: ",error);
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
            textColor: req.body.textColor,
            bgColor: req.body.bgColor
        }).save();

        return res.status(201).json({ message: "Create a tag successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at createTag: ", error);
        next(error);
    }
}

const deleteTag = async (req, res, next) => {
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

const updateTag = async (req, res, next) => {
    try {
        if (!req.body._id) return res.status(400).json({ message: "Tag id is required" });

        const currentTag = await Tag.findById(req.body._id);
        if (!currentTag) return res.status(404).json({ message: "Tag not found" });

        if (req.body.name && req.body.name !== currentTag.name) {
            const check = await nameValidation(req.body.name, 'tag');
            if (check) return res.status(409).json({ message: 'Tag name is already taken' });
        }

        currentTag.name = req.body.name;
        currentTag.textColor = req.body.textColor;
        currentTag.bgColor = req.body.bgColor;

        await currentTag.save();

        return res.status(200).json({ message: "Update successfully" });

    } catch (error) {
        console.error("Error from /server/controllers/admin/categoryManagement.js at UpdateTag: ", error);
        next(error);
    }
}

const getAllTags= async(req,res,next)=>{
    try{
        const allTags = await Tag.find();
        return res.status(200).json({message:"Get all tags successfully",tags: allTags});

    }catch(error){
        console.error("Error from /server/controllers/admin/categoryManagement.js at getAllTags: ",error);
        next(error);
    }
}

export {
    createCategory, deleteCategory, updateCategory, getAllCategories,
    createType, deleteType, updateType, getAllTypes,
    createTag, deleteTag, updateTag, getAllTags
}