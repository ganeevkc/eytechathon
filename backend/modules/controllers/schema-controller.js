import fs from "fs";
import schemesData from "../../data/schemes.json" assert {type: 'json'};

export const filterSchemes = async (req, res) => {
    try {
        const {gender, age, caste, location, marital_status} = req.body;
        const schemes = schemesData.schemes;
        // const data = await fs.readFileSync("./data/schemes.json", "utf-8");
        // const schemes = JSON.parse(data);
        const eligibleSchemes = schemes.filter(scheme => {
            const eligibility = scheme.eligibility_criteria;
            
            if (eligibility.gender !== "any" && eligibility.gender !== null && eligibility.gender !== gender) return false;
            
            if (
                eligibility.age &&
                (eligibility.age.min !== null || eligibility.age.max !== null)
            ) {
                const { min, max } = eligibility.age;
                if ((min !== null && age < min) || (max !== null && age > max)) {
                    return false;
                }
            }
            
            if (eligibility.caste !== "any" && eligibility.caste !== null && eligibility.caste !== caste) return false;
            if (eligibility.location && !eligibility.location.includes(location) && location !== null) return false;
            if (eligibility.marital_status && eligibility.marital_status !== marital_status && marital_status !== null) return false;
            return true;
        });
        res.status(200).json({message: "Filtered schemes retrieved successfully!", data: eligibleSchemes});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error while filtering ", error});
    }
}