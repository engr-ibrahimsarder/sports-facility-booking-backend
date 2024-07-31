import { model, Schema } from "mongoose";
import { TFacility } from "./facility.interface";

const facilitySchema = new Schema<TFacility>(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    pricePerHour: {
      type: Number,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const Facility = model<TFacility>("Facility", facilitySchema);
