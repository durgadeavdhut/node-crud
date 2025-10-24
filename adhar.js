const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.listen(8080, ()=>{
    console.log(`Server started on post: 8080 and ready to serve the request.`);
});

//database Connection
async function dbConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/adhar_database");
    console.log("====== MongoDB Connection successful ==========");
  } catch (error) {
    console.log("======= Error occurred while connecting with MongoDB =======");
    console.log(error);
  }
}
dbConnection();

//schema
const adharSchema = new mongoose.Schema(
  {
    adharno: { type: Number },
    fullName: { type: String },
    isMarried: { type: String },
    city: { type: String },
    pin: { type: Number },
    country: { type: String },
  },
  {
    collection: "adhar_collection",
    timestamps: true,
  }
);

// Model
const Adhar = mongoose.model("Adhar", adharSchema);


// GET API - fetch Aadhaar details by adharno
app.get("/adhar_collection", async (req, res) => {
  try {
    const records = await Adhar.find();
    res.status(200).json(records);
  } catch (error) {
    console.error("Error fetching Aadhaar records:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.post('/adhar_collection/create', async (request, response)=>{
   const{ adharno, fullName, isMarried, city, pin, country } = request.body;
   console.log(`Creating the student with id: ${adharno}`);
   const addedRecord = await Adhar.create(
    {
    adharno, fullName, isMarried, city, pin, country
   });
   response.status(200).json(addedRecord);
});



app.delete('/adhar_collection/:adhar_no', async (request, response) => {
  const adhar_no = Number(request.params.adhar_no);  // convert to Number
  console.log(`Deleting the Aadhaar holder with adharno: ${adhar_no}`);
  const deletedRecord = await Adhar.findOneAndDelete({ adharno: adhar_no });
  if (!deletedRecord) {
    return response.status(404).json({ message: `Aadhaar holder not found with adharno: ${adhar_no}` });
  }
  return response.status(200).json({ message: "Record deleted successfully", deletedRecord });
});


// app.delete('/adhar_collection/:adhar_no', async (request, response)=>{
//    const adhar_no = request.params.adhar_no;
//    console.log(`Deleting the adhar holder with id: ${adhar_no}`);
//    const deletedrecord = await Adhar.findOneAndDelete({adharno:adhar_no});
//    if (!deletedRecord) {
//         return response.status(400).json(`Adhar holder id not found with id : ${adhar_no} `);
//    }
//    return response.status(200).json(deletedrecord);
// });


app.put("/adhar_collection/update", async (req, res) => {
  const { adharno, fullName, isMarried, city, pin, country } = req.body;

  console.log(`Updating the Aadhaar record with adharno: ${adharno}`);

  const updatedRecord = await Adhar.findOneAndUpdate(
    { adharno: adharno }, // Find by Aadhaar number
    { fullName, isMarried, city, pin, country }, // Fields to update
    { new: true, upsert: true } // Return updated doc, create if not exists
  );

  res.status(200).json(updatedRecord);
});

