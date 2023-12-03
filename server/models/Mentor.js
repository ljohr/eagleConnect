import mongoose from "mongoose";
const { Schema } = mongoose;

const MentorSchema = new Schema({
  name: String,
  email: { type: String, unique: true, match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] },
  password: String,
  photo: String,
  major: String,
  region: String,
  sector: String,
  jobTitle: String,
  gradYear: { type: Number, default: 2020 },
  linkedin: String,
  about: String,
  resume: String,
  highlights: [String],
  skills: [String],
  interests: [String],

  meetingMethod: {
    zoom: { type: Boolean, default: false },
    inPerson: { type: Boolean, default: false },
    Email: { type: Boolean, default: false },
    Phone: { type: Boolean, default: false },
  },
  helpType: {
    generalCareer: { type: Boolean, default: false },
    specificCareer: { type: Boolean, default: false },
    resumeReview: { type: Boolean, default: false },
    coffeeChat: { type: Boolean, default: false },
  },
});

const MentorModel = mongoose.model("Mentor", MentorSchema);

export default MentorModel;