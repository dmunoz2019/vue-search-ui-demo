const axios = require("axios");
const xml2js = require("xml2js");
const fs = require("fs");
const path = require("path");

const url =
  "https://www.treasury.gov/ofac/downloads/consolidated/consolidated.xml";
const dataDir = path.join(__dirname, "src/data");
const outputPath = path.join(dataDir, "ofac-consolidated.json");

// Create the data directory if it does not exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

axios
  .get(url)
  .then(response => {
    const xml = response.data;
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        console.error("Error converting XML to JSON:", err);
        return;
      }

      const json = JSON.stringify(result, null, 2);
      fs.writeFile(outputPath, json, err => {
        if (err) {
          console.error("Error saving JSON to file:", err);
          return;
        }
        console.log("JSON saved to", outputPath);
      });
    });
  })
  .catch(error => {
    console.error("Error downloading XML:", error);
  });
