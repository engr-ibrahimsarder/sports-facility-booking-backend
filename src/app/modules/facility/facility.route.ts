import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { facilityValidation } from "./facility.validation";
import { facilityController } from "./facility.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(facilityValidation.createFacilityValidationSchema),
  facilityController.createFacility
);
router.get("/", facilityController.getAllFacility);
router.put(
  "/:id",
  validateRequest(facilityValidation.updateFacilityValidationSchema),
  facilityController.updateFacility
);
router.delete("/:id", facilityController.deleteFacility);
export const facilityRoutes = router;
