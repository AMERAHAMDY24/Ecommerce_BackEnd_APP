import { Router } from "express";

import * as categoryController from "./category.controller.js"

export const categoryRouter=Router();

categoryRouter.post("/addCategory", categoryController.addCategory)
categoryRouter.get("/Allcategories", categoryController.allCategories)
categoryRouter.get("/specificCategory/:id", categoryController.specificCategory)
categoryRouter.put("/updateCategory/:id", categoryController.updateCategory)
categoryRouter.delete("/deleteCategory/:id", categoryController.deleteCategory)