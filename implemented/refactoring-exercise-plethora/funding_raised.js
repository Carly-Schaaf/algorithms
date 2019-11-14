const parseCsvSync = require('csv-parse/lib/sync');
const fs = require('fs');
const path = require('path');

class FundingRaised {
  static where(options = {}) {
    const funding_file = 'startup_funding.csv';
    const file_data = fs.readFileSync(path.join(__dirname, '..', funding_file)).toString();
    let csv_data = parseCsvSync(file_data);
    const columnsIdx = {
      'company_name': 1,
      'city': 4,
      'state': 5,
      'round': 9
    }    
    const fields = Object.keys(options).filter(key => options[key]);

    csv_data = csv_data.filter(row => {
      return fields.every(field => {
        const idx = columnsIdx[field];
        return row[idx] === options[field];
      })
      // let match = false;
      // if (options.company_name && options.company_name == row[1]) {
      //   match = true;
      // } else {
      //   match = false;
      // }
      // if (options.city && options.city == row[4]) {
      //   match = true;
      // }
      // if (options.state && options.state == row[5]) {
      //   return true;
      // }
      // if (options.round && options.round == row[9]) {
      //   return true;
      // }
      // return false;
    });

    const funding_data = [];

    csv_data.forEach((row) => {
      const mapped = {};
      mapped.permalink = row[0];
      mapped.company_name = row[1];
      mapped.number_employees = row[2];
      mapped.category = row[3];
      mapped.city = row[4];
      mapped.state = row[5];
      mapped.funded_date = row[6];
      mapped.raised_amount = row[7];
      mapped.raised_currency = row[8];
      mapped.round = row[9];
      funding_data.push(mapped);
    });

    return funding_data;
  }

  static findBy(options = {}) {
    const funding_file = 'startup_funding.csv';
    const file_data = fs.readFileSync(path.join(__dirname, '..', funding_file)).toString();
    let csv_data = parseCsvSync(file_data);
    const mapped = {};

    for(var i = 0; i < csv_data.length; i++) {
      var row = csv_data[i];

      if (options.company_name) {
        if (options.company_name == row[1]) {
          mapped.permalink = row[0];
          mapped.company_name = row[1];
          mapped.number_employees = row[2];
          mapped.category = row[3];
          mapped.city = row[4];
          mapped.state = row[5];
          mapped.funded_date = row[6];
          mapped.raised_amount = row[7];
          mapped.raised_currency = row[8];
          mapped.round = row[9];
        } else {
          continue;
        }
      }

      if (options.city) {
        if (options.city == row[4]) {
          mapped.permalink = row[0];
          mapped.company_name = row[1];
          mapped.number_employees = row[2];
          mapped.category = row[3];
          mapped.city = row[4];
          mapped.state = row[5];
          mapped.funded_date = row[6];
          mapped.raised_amount = row[7];
          mapped.raised_currency = row[8];
          mapped.round = row[9];
        } else {
          continue;
        }
      }

      if (options.state) {
        if (options.state == row[5]) {
          mapped.permalink = row[0];
          mapped.company_name = row[1];
          mapped.number_employees = row[2];
          mapped.category = row[3];
          mapped.city = row[4];
          mapped.state = row[5];
          mapped.funded_date = row[6];
          mapped.raised_amount = row[7];
          mapped.raised_currency = row[8];
          mapped.round = row[9];
        } else {
          continue;
        }
      }

      if (options.round) {
        if (options.round == row[9]) {
          mapped.permalink = row[0];
          mapped.company_name = row[1];
          mapped.number_employees = row[2];
          mapped.category = row[3];
          mapped.city = row[4];
          mapped.state = row[5];
          mapped.funded_date = row[6];
          mapped.raised_amount = row[7];
          mapped.raised_currency = row[8];
          mapped.round = row[9];
        } else {
          continue;
        }
      }

      return mapped
    }
  }
}

module.exports = FundingRaised;
