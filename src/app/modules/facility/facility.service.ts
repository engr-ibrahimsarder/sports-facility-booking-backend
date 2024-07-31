import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TFacility } from "./facility.interface";
import { Facility } from "./facility.model";

const createFacilityIntoDB = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};
const getAllFacilityFromDB = async () => {
  const result = await Facility.find();
  return result;
};
const updateFacilityIntoDB = async (
  id: string,
  payload: Partial<TFacility>
) => {
  const isFacilityExists = await Facility.findById(id);
  // check semester registration not exits
  if (!isFacilityExists) {
    throw new AppError(httpStatus.NOT_FOUND, `Facility is not found`);
  }
  const result = await Facility.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteFacilityIntoDB = async (id: string) => {
  const isFacilityExists = await Facility.findById(id);
  // check semester registration not exits
  if (!isFacilityExists) {
    throw new AppError(httpStatus.NOT_FOUND, `Facility is not found`);
  }
  const result = await Facility.findByIdAndDelete(id, { isDeleted: true });
  return result;
};
export const facilityServices = {
  createFacilityIntoDB,
  getAllFacilityFromDB,
  updateFacilityIntoDB,
  deleteFacilityIntoDB,
};
