import Banner from "../../models/product/banner.js";

const createBanner = async (req, res, next) => {
    try {
        await new Banner({
            img: "/img",
            tag: "",
            title: "",
            subTitle: "",
            mode: req.body.mode,
            position: req.body.position
        }).save();
        return res.status(201).json({ message: "Create banner successfully" });

    } catch (error) {
        console.error('Error from /server/controllers/admin/bannerManagement.js at createBanner', error);
        next(error);
    }
}

const addMainBanner = async (req, res, next) => { //post
    try {
        await new Banner({
            img: "/img",
            tag: req.body.tag,
            title: req.body.title,
            subTitle: req.body.subTitle,
            mode: "main",
            position: req.body.position
        }).save();
        return res.status(201).json({ message: "Add main banner successfully" });

    } catch (error) {
        console.error('Error from /server/controllers/admin/bannerManagement.js at addMainBanner', error);
        next(error);
    }
};

const deleteMainBanner = async (req, res, next) => { //delete
    try {
        if (req.body.mode !== 'main') return res.status(400).json({ message: "You can't delete sub banner" });
        const currentBanner = await Banner.findOneAndDelete({ _id: req.body._id });
        if (!currentBanner) return res.status(404).json({ message: "Banner not found" });

        return res.status(200).json({ message: "Delete banner successfully" });

    } catch (error) {
        console.error('Error from /server/controllers/admin/bannerManagement.js at addMainBanner', error);
        next(error);
    }
};


const updateBanner = async (req, res, next) => { //patch
    try {
        const currentBanner = await Banner.findOne({ _id: req.body._id });
        if (!currentBanner) return res.status(404).json({ message: "Banner not found" });

        const data = { ...req.body }
        delete data._id;

        Object.assign(currentBanner, data);
        await currentBanner.save();

        return res.status(200).json({ message: "Update banner successfully" });

    } catch (error) {
        console.error('Error from /server/controllers/admin/bannerManagement.js at addMainBanner', error);
        next(error);
    }
};


export { createBanner, addMainBanner, deleteMainBanner, updateBanner };