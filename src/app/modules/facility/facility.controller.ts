import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { facilityServices } from "./facility.service";

const createFacility = catchAsync(async (req, res) => {
  const result = await facilityServices.createFacilityIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Facility added successfully",
    data: result,
  });
});
const getAllFacility = catchAsync(async (req, res) => {
  const result = await facilityServices.getAllFacilityFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Facility added successfully",
    data: result,
  });
});
const updateFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await facilityServices.updateFacilityIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Facility updated successfully",
    data: result,
  });
});
const deleteFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await facilityServices.deleteFacilityIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Facility deleted successfully",
    data: result,
  });
});
export const facilityController = {
  createFacility,
  getAllFacility,
  updateFacility,
  deleteFacility,
};
