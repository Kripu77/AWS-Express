const { mongoose } = require("mongoose");

//db connection pipeline fn

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectDb,
};
