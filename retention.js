const teams = {
    CSK: {
        name: "Chennai Super Kings",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg",
        players: [
            { name: "Ruturaj Gaikwad", specialty: "Batsman", retention: 100, stats: { runs: 617, matches: 12, avg: 56.09, sr: 148.79 } },
            { name: "MS Dhoni", specialty: "Wicketkeeper-Batsman", retention: 100, stats: { runs: 161, matches: 14, avg: 53.67, sr: 220.55, catches: 13 } },
            { name: "Ravindra Jadeja", specialty: "All-Rounder", retention: 100, stats: { runs: 267, wickets: 10, matches: 14, avg: 44.50, sr: 142.78 } },
            { name: "Shivam Dube", specialty: "All-Rounder", retention: 85, stats: { runs: 396, wickets: 0, matches: 14, avg: 36.00, sr: 162.30 } },
            { name: "Matheesha Pathirana", specialty: "Bowler", retention: 80, stats: { wickets: 13, matches: 6, economy: 7.68 } },
            { name: "Noor Ahmad", specialty: "Bowler", retention: 75, stats: { wickets: 21, matches: 13, economy: 7.45 } },
            { name: "Ravichandran Ashwin", specialty: "All-Rounder", retention: 70, stats: { runs: 106, wickets: 9, matches: 15, avg: 26.50, sr: 132.50 } },
            { name: "Devon Conway", specialty: "Batsman", retention: 65, stats: { runs: 252, matches: 7, avg: 42.00, sr: 135.48 } },
            { name: "Khaleel Ahmed", specialty: "Bowler", retention: 60, stats: { wickets: 17, matches: 14, economy: 8.45 } },
            { name: "Rachin Ravindra", specialty: "All-Rounder", retention: 60, stats: { runs: 222, wickets: 4, matches: 10, avg: 22.20, sr: 160.87 } },
            { name: "Rahul Tripathi", specialty: "Batsman", retention: 55, stats: { runs: 199, matches: 9, avg: 24.87, sr: 143.17 } },
            { name: "Vijay Shankar", specialty: "All-Rounder", retention: 55, stats: { runs: 101, wickets: 0, matches: 7, avg: 25.25, sr: 125.00 } },
            { name: "Sam Curran", specialty: "All-Rounder", retention: 50, stats: { runs: 270, wickets: 16, matches: 13, avg: 22.50, sr: 135.68 } },
            { name: "Shaik Rasheed", specialty: "Batsman", retention: 50, stats: { runs: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Anshul Kamboj", specialty: "Bowler", retention: 45, stats: { wickets: 2, matches: 3, economy: 9.00 } },
            { name: "Mukesh Choudhary", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Deepak Hooda", specialty: "All-Rounder", retention: 40, stats: { runs: 145, wickets: 0, matches: 11, avg: 18.12, sr: 128.32 } },
            { name: "Gurjanpreet Singh", specialty: "Bowler", retention: 40, stats: { wickets: 0, matches: 0, economy: 0 } }
        ]
    },
    MI: {
        name: "Mumbai Indians",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",
        players: [
            { name: "Hardik Pandya", specialty: "All-Rounder", retention: 100, stats: { runs: 246, wickets: 11, matches: 14, avg: 20.50, sr: 146.43 } },
            { name: "Jasprit Bumrah", specialty: "Bowler", retention: 100, stats: { wickets: 20, matches: 13, economy: 6.48 } },
            { name: "Rohit Sharma", specialty: "Batsman", retention: 100, stats: { runs: 417, matches: 14, avg: 29.78, sr: 150.00 } },
            { name: "Suryakumar Yadav", specialty: "Batsman", retention: 100, stats: { runs: 345, matches: 11, avg: 34.50, sr: 167.48 } },
            { name: "Tilak Varma", specialty: "Batsman", retention: 85, stats: { runs: 416, matches: 13, avg: 41.60, sr: 149.64 } },
            { name: "Trent Boult", specialty: "Bowler", retention: 80, stats: { wickets: 13, matches: 12, economy: 8.33 } },
            { name: "Naman Dhir", specialty: "All-Rounder", retention: 75, stats: { runs: 74, wickets: 0, matches: 7, avg: 12.33, sr: 124.37 } },
            { name: "Robin Minz", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 0, matches: 0, avg: 0, sr: 0, catches: 0 } },
            { name: "Karn Sharma", specialty: "Bowler", retention: 65, stats: { wickets: 7, matches: 9, economy: 9.25 } },
            { name: "Ryan Rickelton", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 0, matches: 0, avg: 0, sr: 0, catches: 0 } },
            { name: "Deepak Chahar", specialty: "Bowler", retention: 60, stats: { wickets: 13, matches: 10, economy: 8.66 } },
            { name: "Allah Ghazanfar", specialty: "Bowler", retention: 55, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Will Jacks", specialty: "All-Rounder", retention: 55, stats: { runs: 230, wickets: 2, matches: 8, avg: 32.86, sr: 175.57 } },
            { name: "Ashwani Kumar", specialty: "Bowler", retention: 50, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Mitchell Santner", specialty: "All-Rounder", retention: 50, stats: { runs: 49, wickets: 7, matches: 7, avg: 16.33, sr: 122.50 } },
            { name: "Reece Topley", specialty: "Bowler", retention: 45, stats: { wickets: 4, matches: 4, economy: 9.00 } },
            { name: "Shrijith Krishnan", specialty: "Wicketkeeper-Batsman", retention: 45, stats: { runs: 0, matches: 0, avg: 0, sr: 0, catches: 0 } },
            { name: "Raj Angad Bawa", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } }
        ]
    },
    RCB: {
        name: "Royal Challengers Bengaluru",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bangalore_Logo.svg",
        players: [
            { name: "Virat Kohli", specialty: "Batsman", retention: 100, stats: { runs: 542, matches: 14, avg: 45.17, sr: 148.08 } },
            { name: "Rajat Patidar", specialty: "Batsman", retention: 85, stats: { runs: 395, matches: 13, avg: 30.38, sr: 177.13 } },
            { name: "Yash Dayal", specialty: "Bowler", retention: 70, stats: { wickets: 15, matches: 14, economy: 8.95 } },
            { name: "Josh Hazlewood", specialty: "Bowler", retention: 65, stats: { wickets: 4, matches: 5, economy: 8.50 } },
            { name: "Phil Salt", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 435, matches: 12, avg: 39.55, sr: 182.01, catches: 10 } },
            { name: "Jitesh Sharma", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 187, matches: 14, avg: 15.58, sr: 147.24, catches: 8 } },
            { name: "Liam Livingstone", specialty: "All-Rounder", retention: 55, stats: { runs: 111, wickets: 3, matches: 7, avg: 22.20, sr: 142.31 } },
            { name: "Rasikh Dar", specialty: "Bowler", retention: 55, stats: { wickets: 8, matches: 9, economy: 9.36 } },
            { name: "Suyash Sharma", specialty: "Bowler", retention: 50, stats: { wickets: 10, matches: 12, economy: 8.75 } },
            { name: "Krunal Pandya", specialty: "All-Rounder", retention: 50, stats: { runs: 143, wickets: 6, matches: 14, avg: 28.60, sr: 115.32 } },
            { name: "Bhuvneshwar Kumar", specialty: "Bowler", retention: 45, stats: { wickets: 11, matches: 14, economy: 8.95 } },
            { name: "Swapnil Singh", specialty: "All-Rounder", retention: 45, stats: { runs: 28, wickets: 6, matches: 7, avg: 14.00, sr: 155.56 } },
            { name: "Tim David", specialty: "Batsman", retention: 40, stats: { runs: 241, matches: 13, avg: 30.12, sr: 160.67 } },
            { name: "Romario Shepherd", specialty: "All-Rounder", retention: 40, stats: { runs: 58, wickets: 10, matches: 9, avg: 29.00, sr: 161.11 } },
            { name: "Nuwan Thushara", specialty: "Bowler", retention: 35, stats: { wickets: 8, matches: 7, economy: 9.25 } },
            { name: "Manoj Bhandage", specialty: "All-Rounder", retention: 35, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Jacob Bethel", specialty: "All-Rounder", retention: 30, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Devdutt Padikkal", specialty: "Batsman", retention: 30, stats: { runs: 261, matches: 12, avg: 23.72, sr: 128.57 } }
        ]
    },
    KKR: {
        name: "Kolkata Knight Riders",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
        players: [
            { name: "Rinku Singh", specialty: "Batsman", retention: 90, stats: { runs: 168, matches: 14, avg: 21.00, sr: 148.67 } },
            { name: "Varun Chakaravarthy", specialty: "Bowler", retention: 85, stats: { wickets: 21, matches: 14, economy: 8.04 } },
            { name: "Sunil Narine", specialty: "All-Rounder", retention: 85, stats: { runs: 488, wickets: 17, matches: 14, avg: 34.86, sr: 180.74 } },
            { name: "Andre Russell", specialty: "All-Rounder", retention: 80, stats: { runs: 222, wickets: 19, matches: 14, avg: 31.71, sr: 185.00 } },
            { name: "Harshit Rana", specialty: "Bowler", retention: 75, stats: { wickets: 19, matches: 13, economy: 9.08 } },
            { name: "Ramandeep Singh", specialty: "All-Rounder", retention: 70, stats: { runs: 125, wickets: 6, matches: 13, avg: 31.25, sr: 192.31 } },
            { name: "Quinton de Kock", specialty: "Wicketkeeper-Batsman", retention: 65, stats: { runs: 250, matches: 11, avg: 22.73, sr: 133.69, catches: 8 } },
            { name: "Rahmanullah Gurbaz", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 238, matches: 11, avg: 23.80, sr: 138.37, catches: 9 } },
            { name: "Angkrish Raghuvanshi", specialty: "Batsman", retention: 60, stats: { runs: 163, matches: 10, avg: 20.37, sr: 155.24 } },
            { name: "Venkatesh Iyer", specialty: "All-Rounder", retention: 55, stats: { runs: 370, wickets: 0, matches: 14, avg: 37.00, sr: 158.80 } },
            { name: "Anrich Nortje", specialty: "Bowler", retention: 55, stats: { wickets: 7, matches: 6, economy: 9.00 } },
            { name: "Vaibhav Arora", specialty: "Bowler", retention: 50, stats: { wickets: 11, matches: 10, economy: 9.25 } },
            { name: "Mayank Markande", specialty: "Bowler", retention: 50, stats: { wickets: 8, matches: 7, economy: 9.50 } },
            { name: "Rovman Powell", specialty: "All-Rounder", retention: 45, stats: { runs: 127, wickets: 0, matches: 10, avg: 25.40, sr: 155.49 } },
            { name: "Manish Pandey", specialty: "Batsman", retention: 45, stats: { runs: 42, matches: 3, avg: 21.00, sr: 113.51 } },
            { name: "Spencer Johnson", specialty: "Bowler", retention: 40, stats: { wickets: 4, matches: 5, economy: 9.00 } },
            { name: "Luvnith Sisodia", specialty: "Wicketkeeper-Batsman", retention: 40, stats: { runs: 0, matches: 0, avg: 0, sr: 0, catches: 0 } },
            { name: "Ajinkya Rahane", specialty: "Batsman", retention: 35, stats: { runs: 242, matches: 13, avg: 22.00, sr: 123.47 } }
        ]
    },
    SRH: {
        name: "Sunrisers Hyderabad",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg",
        players: [
            { name: "Heinrich Klaasen", specialty: "Wicketkeeper-Batsman", retention: 95, stats: { runs: 479, matches: 12, avg: 47.90, sr: 171.07, catches: 12 } },
            { name: "Pat Cummins", specialty: "Bowler", retention: 90, stats: { wickets: 17, matches: 13, economy: 8.54 } },
            { name: "Abhishek Sharma", specialty: "All-Rounder", retention: 85, stats: { runs: 484, wickets: 2, matches: 14, avg: 34.57, sr: 204.22 } },
            { name: "Travis Head", specialty: "Batsman", retention: 80, stats: { runs: 567, matches: 13, avg: 43.61, sr: 191.55 } },
            { name: "Nitish Kumar Reddy", specialty: "All-Rounder", retention: 75, stats: { runs: 303, wickets: 3, matches: 11, avg: 37.88, sr: 142.92 } },
            { name: "Ishan Kishan", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 320, matches: 14, avg: 22.86, sr: 148.84, catches: 10 } },
            { name: "Mohammad Shami", specialty: "Bowler", retention: 70, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Harshal Patel", specialty: "Bowler", retention: 65, stats: { wickets: 24, matches: 14, economy: 9.73 } },
            { name: "Rahul Chahar", specialty: "Bowler", retention: 60, stats: { wickets: 10, matches: 12, economy: 8.50 } },
            { name: "Adam Zampa", specialty: "Bowler", retention: 60, stats: { wickets: 2, matches: 2, economy: 8.00 } },
            { name: "Atharva Taide", specialty: "Batsman", retention: 55, stats: { runs: 186, matches: 7, avg: 26.57, sr: 134.78 } },
            { name: "Abhinav Manohar", specialty: "Batsman", retention: 55, stats: { runs: 108, matches: 6, avg: 18.00, sr: 144.00 } },
            { name: "Simarjeet Singh", specialty: "Bowler", retention: 50, stats: { wickets: 3, matches: 4, economy: 8.75 } },
            { name: "Zeeshan Ansari", specialty: "Bowler", retention: 50, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Jaydev Unadkat", specialty: "Bowler", retention: 45, stats: { wickets: 8, matches: 11, economy: 9.00 } },
            { name: "Brydon Carse", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Kamindu Mendis", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Aniket Verma", specialty: "Bowler", retention: 40, stats: { wickets: 0, matches: 0, economy: 0 } }
        ]
    },
    DC: {
        name: "Delhi Capitals",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals_Logo.svg",
        players: [
            { name: "Axar Patel", specialty: "All-Rounder", retention: 90, stats: { runs: 235, wickets: 11, matches: 14, avg: 29.38, sr: 131.28 } },
            { name: "Kuldeep Yadav", specialty: "Bowler", retention: 85, stats: { wickets: 16, matches: 11, economy: 8.66 } },
            { name: "Tristan Stubbs", specialty: "Batsman", retention: 80, stats: { runs: 378, matches: 14, avg: 54.00, sr: 166.52 } },
            { name: "Abishek Porel", specialty: "Wicketkeeper-Batsman", retention: 75, stats: { runs: 327, matches: 14, avg: 25.15, sr: 159.51, catches: 10 } },
            { name: "KL Rahul", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 520, matches: 14, avg: 37.14, sr: 136.13, catches: 9 } },
            { name: "Harry Brook", specialty: "Batsman", retention: 65, stats: { runs: 113, matches: 4, avg: 28.25, sr: 141.25 } },
            { name: "Jake Fraser-McGurk", specialty: "Batsman", retention: 65, stats: { runs: 330, matches: 9, avg: 36.66, sr: 234.04 } },
            { name: "Karun Nair", specialty: "Batsman", retention: 60, stats: { runs: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "T Natarajan", specialty: "Bowler", retention: 60, stats: { wickets: 19, matches: 12, economy: 8.24 } },
            { name: "Mitchell Starc", specialty: "Bowler", retention: 55, stats: { wickets: 17, matches: 13, economy: 10.61 } },
            { name: "Sameer Rizvi", specialty: "Batsman", retention: 55, stats: { runs: 51, matches: 8, avg: 12.75, sr: 113.33 } },
            { name: "Ashutosh Sharma", specialty: "Batsman", retention: 50, stats: { runs: 189, matches: 11, avg: 27.00, sr: 167.26 } },
            { name: "Mohit Sharma", specialty: "Bowler", retention: 50, stats: { wickets: 13, matches: 12, economy: 10.00 } },
            { name: "Faf du Plessis", specialty: "Batsman", retention: 45, stats: { runs: 438, matches: 14, avg: 31.28, sr: 161.62 } },
            { name: "Mukesh Kumar", specialty: "Bowler", retention: 45, stats: { wickets: 17, matches: 10, economy: 10.36 } },
            { name: "Darshan Nalkande", specialty: "Bowler", retention: 40, stats: { wickets: 2, matches: 3, economy: 9.50 } },
            { name: "Vipraj Nigam", specialty: "Bowler", retention: 40, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Dushmantha Chameera", specialty: "Bowler", retention: 35, stats: { wickets: 2, matches: 2, economy: 8.50 } }
        ]
    },
    RR: {
        name: "Rajasthan Royals",
        logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg",
        players: [
            { name: "Sanju Samson", specialty: "Wicketkeeper-Batsman", retention: 95, stats: { runs: 531, matches: 14, avg: 48.27, sr: 153.46, catches: 11 } },
            { name: "Yashasvi Jaiswal", specialty: "Batsman", retention: 90, stats: { runs: 435, matches: 14, avg: 31.07, sr: 155.36 } },
            { name: "Riyan Parag", specialty: "All-Rounder", retention: 85, stats: { runs: 573, wickets: 0, matches: 14, avg: 52.09, sr: 149.22 } },
            { name: "Dhruv Jurel", specialty: "Wicketkeeper-Batsman", retention: 80, stats: { runs: 195, matches: 13, avg: 24.38, sr: 135.42, catches: 9 } },
            { name: "Shimron Hetmyer", specialty: "Batsman", retention: 75, stats: { runs: 113, matches: 10, avg: 28.25, sr: 141.25 } },
            { name: "Sandeep Sharma", specialty: "Bowler", retention: 70, stats: { wickets: 13, matches: 11, economy: 8.18 } },
            { name: "Jofra Archer", specialty: "Bowler", retention: 65, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Wanindu Hasaranga", specialty: "All-Rounder", retention: 65, stats: { runs: 72, wickets: 9, matches: 8, avg: 18.00, sr: 163.64 } },
            { name: "Maheesh Theekshana", specialty: "Bowler", retention: 60, stats: { wickets: 6, matches: 8, economy: 8.00 } },
            { name: "Akash Madhwal", specialty: "Bowler", retention: 60, stats: { wickets: 5, matches: 5, economy: 9.75 } },
            { name: "Kumar Kartikeya Singh", specialty: "Bowler", retention: 55, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Nitish Rana", specialty: "Batsman", retention: 55, stats: { runs: 226, matches: 10, avg: 25.11, sr: 134.52 } },
            { name: "Tushar Deshpande", specialty: "Bowler", retention: 50, stats: { wickets: 17, matches: 13, economy: 8.64 } },
            { name: "Shubham Dubey", specialty: "Batsman", retention: 50, stats: { runs: 66, matches: 6, avg: 16.50, sr: 146.67 } },
            { name: "Yudhvir Charak", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Fazal Farooqi", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Vaibhav Suryavanshi", specialty: "Batsman", retention: 40, stats: { runs: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Kwena Maphaka", specialty: "Bowler", retention: 40, stats: { wickets: 1, matches: 2, economy: 10.00 } }
        ]
    },
    PBKS: {
        name: "Punjab Kings",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/14/Punjab_Kings_Logo.svg",
        players: [
            { name: "Shreyas Iyer", specialty: "Batsman", retention: 90, stats: { runs: 351, matches: 14, avg: 27.00, sr: 137.65 } },
            { name: "Yuzvendra Chahal", specialty: "Bowler", retention: 85, stats: { wickets: 18, matches: 14, economy: 8.18 } },
            { name: "Arshdeep Singh", specialty: "Bowler", retention: 80, stats: { wickets: 19, matches: 14, economy: 9.00 } },
            { name: "Marcus Stoinis", specialty: "All-Rounder", retention: 75, stats: { runs: 388, wickets: 4, matches: 14, avg: 32.33, sr: 147.53 } },
            { name: "Glenn Maxwell", specialty: "All-Rounder", retention: 75, stats: { runs: 243, wickets: 6, matches: 10, avg: 27.00, sr: 155.77 } },
            { name: "Shashank Singh", specialty: "All-Rounder", retention: 70, stats: { runs: 354, wickets: 0, matches: 14, avg: 44.25, sr: 164.65 } },
            { name: "Prabhsimran Singh", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 334, matches: 14, avg: 23.86, sr: 150.45, catches: 10 } },
            { name: "Harpreet Brar", specialty: "All-Rounder", retention: 65, stats: { runs: 28, wickets: 7, matches: 13, avg: 14.00, sr: 112.00 } },
            { name: "Vijaykumar Vyshak", specialty: "Bowler", retention: 60, stats: { wickets: 1, matches: 2, economy: 9.50 } },
            { name: "Yash Thakur", specialty: "Bowler", retention: 60, stats: { wickets: 11, matches: 10, economy: 9.80 } },
            { name: "Marco Jansen", specialty: "Bowler", retention: 55, stats: { wickets: 1, matches: 3, economy: 9.00 } },
            { name: "Josh Inglis", specialty: "Wicketkeeper-Batsman", retention: 55, stats: { runs: 0, matches: 0, avg: 0, sr: 0, catches: 0 } },
            { name: "Lockie Ferguson", specialty: "Bowler", retention: 50, stats: { wickets: 10, matches: 7, economy: 9.25 } },
            { name: "Azmatullah Omarzai", specialty: "All-Rounder", retention: 50, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Harnoor Pannu", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Kuldeep Sen", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Priyansh Arya", specialty: "Batsman", retention: 40, stats: { runs: 0, matches: 0, avg: 0, sr: 0 } },
            { name: "Aaron Hardie", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0, avg: 0, sr: 0 } }
        ]
    }
};
const INITIAL_BUDGET = 8000000; // ₹80Cr in lakhs
const RETENTION_PRICES = [1500000, 1000000, 1300000, 500000, 400000, 400000]; // ₹15Cr, ₹10Cr, ₹13Cr, ₹5Cr, ₹4Cr, ₹4Cr

function calculateDemandScore(player) {
    try {
        const stats = player.stats || {};
        const runs = stats.runs || 0;
        const wickets = stats.wickets || 0;
        const avg = stats.avg || 0;
        const retention = player.retention || 50;
        const economy = stats.economy || 0;
        const matches = stats.matches || 1;
        const randomness1 = Math.random() * 100; // For 60% component
        const randomness2 = Math.random() * 100; // For 10% component

        let demand = 0;
        if (player.specialty.includes("Batsman") || player.specialty.includes("Wicketkeeper-Batsman")) {
            const performance = (0.3 * (runs / matches)) + (0.6 * avg) + (0.1 * randomness1);
            demand = (0.3 * retention) + (0.6 * performance) + (0.1 * randomness2);
        } else if (player.specialty.includes("Bowler")) {
            const performance = (0.3 * wickets) + (0.6 * avg) + (0.1 * randomness1);
            demand = (0.3 * retention) + (0.6 * performance) + (0.1 * randomness2);
        } else if (player.specialty.includes("All-Rounder")) {
            const performance = (0.3 * runs) + (0.3 * wickets) + (0.2 * avg) - (0.2 * economy);
            demand = (0.3 * retention) + (0.6 * performance) + (0.1 * randomness2);
        }

        return Math.min(500, Math.max(100, Math.round(demand)));
    } catch (error) {
        console.error("Error in calculateDemandScore:", error);
        return 100;
    }
}

function calculateRetentionFee(retainedCount) {
    try {
        return RETENTION_PRICES[retainedCount] || 400000; // Default to ₹4Cr
    } catch (error) {
        console.error("Error in calculateRetentionFee:", error);
        return 400000;
    }
}

function getTotalRetentionCost(gameState, teamCode) {
    const retained = gameState.retainedPlayers?.[teamCode] || [];
    const fees = gameState.retentionFees?.[teamCode] || {};
    return retained.reduce((total, playerName) => total + (fees[playerName] || 0), 0);
}

window.onload = function() {
    try {
        console.log('Retention page loaded');
        const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
        const teamCode = gameState.selectedTeam;
        if (!teamCode || !teams[teamCode]) {
            console.error('No team selected:', teamCode);
            alert('Please select a team first!');
            window.location.href = 'index.html';
            return;
        }

        const team = teams[teamCode];
        document.getElementById('teamName').textContent = team.name + ' - Player Retention';
        document.getElementById('teamLogo').src = team.logo;
        gameState.teamBudgets = gameState.teamBudgets || {};
        gameState.teamBudgets[teamCode] = gameState.teamBudgets[teamCode] || INITIAL_BUDGET;
        document.getElementById('remainingBudget').textContent = (gameState.teamBudgets[teamCode] / 100000).toFixed(2);
        document.getElementById('totalCost').textContent = (getTotalRetentionCost(gameState, teamCode) / 100000).toFixed(2);
        document.getElementById('retainedCount').textContent = `${(gameState.retainedPlayers?.[teamCode] || []).length}/6`;

        displayPlayers(team, gameState);
        updateRetainedPlayers(gameState);
    } catch (error) {
        console.error('Error in window.onload:', error);
        alert('An error occurred while loading the page. Please try again.');
    }
};

function displayPlayers(team, gameState) {
    try {
        const playerList = document.getElementById('playerList');
        playerList.innerHTML = '';
        const retainedCount = (gameState.retainedPlayers?.[gameState.selectedTeam] || []).length;
        const nextFee = calculateRetentionFee(retainedCount);

        team.players.forEach(player => {
            const demand = calculateDemandScore(player);
            const div = document.createElement('div');
            div.className = 'player-card';
            div.innerHTML = `
                <h3>${player.name}</h3>
                <p>Role: ${player.specialty}</p>
                <p>Status: ${player.uncapped ? 'Uncapped' : 'Capped'}</p>
                <p>Demand Score: ${demand}</p>
                <p>Retention Fee: ₹${(nextFee / 100000).toFixed(2)}Cr</p>
                <button onclick="retainPlayer('${player.name}', ${nextFee})" ${gameState.retainedPlayers?.[gameState.selectedTeam]?.includes(player.name) ? 'disabled' : ''}>Retain</button>
            `;
            playerList.appendChild(div);
        });
    } catch (error) {
        console.error('Error in displayPlayers:', error);
    }
}

function retainPlayer(playerName, fee) {
    try {
        const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
        const teamCode = gameState.selectedTeam;
        gameState.retainedPlayers = gameState.retainedPlayers || {};
        gameState.retainedPlayers[teamCode] = gameState.retainedPlayers[teamCode] || [];
        gameState.retentionFees = gameState.retentionFees || {};
        gameState.retentionFees[teamCode] = gameState.retentionFees[teamCode] || {};
        gameState.teamBudgets = gameState.teamBudgets || {};
        gameState.teamBudgets[teamCode] = gameState.teamBudgets[teamCode] || INITIAL_BUDGET;

        if (gameState.retainedPlayers[teamCode].length >= 6) {
            alert('Maximum 6 players can be retained!');
            return;
        }

        if (gameState.teamBudgets[teamCode] < fee) {
            alert('Insufficient budget to retain this player!');
            return;
        }

        if (!gameState.retainedPlayers[teamCode].includes(playerName)) {
            gameState.retainedPlayers[teamCode].push(playerName);
            gameState.retentionFees[teamCode][playerName] = fee;
            gameState.teamBudgets[teamCode] -= fee;
            localStorage.setItem('iplAuctionGameState', JSON.stringify(gameState));
            document.getElementById('remainingBudget').textContent = (gameState.teamBudgets[teamCode] / 100000).toFixed(2);
            document.getElementById('totalCost').textContent = (getTotalRetentionCost(gameState, teamCode) / 100000).toFixed(2);
            document.getElementById('retainedCount').textContent = `${gameState.retainedPlayers[teamCode].length}/6`;
            updateRetainedPlayers(gameState);
            displayPlayers(teams[teamCode], gameState);
        }
    } catch (error) {
        console.error('Error in retainPlayer:', error);
        alert('An error occurred while retaining player. Please try again.');
    }
}

function updateRetainedPlayers(gameState) {
    try {
        const retainedList = document.getElementById('retainedList');
        retainedList.innerHTML = '';
        const teamCode = gameState.selectedTeam;
        const retained = gameState.retainedPlayers?.[teamCode] || [];
        const fees = gameState.retentionFees?.[teamCode] || {};

        retained.forEach(playerName => {
            const player = teams[teamCode].players.find(p => p.name === playerName);
            if (player) {
                const div = document.createElement('div');
                div.className = 'selected-player';
                div.innerHTML = `
                    <h3>${player.name}</h3>
                    <p>Role: ${player.specialty}</p>
                    <p>Fee: ₹${(fees[playerName] / 100000).toFixed(2)}Cr</p>
                    <button onclick="removePlayer('${player.name}', ${fees[playerName]})">Remove</button>
                `;
                retainedList.appendChild(div);
            }
        });
    } catch (error) {
        console.error('Error in updateRetainedPlayers:', error);
    }
}

function removePlayer(playerName, fee) {
    try {
        const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
        const teamCode = gameState.selectedTeam;
        gameState.retainedPlayers[teamCode] = gameState.retainedPlayers[teamCode].filter(p => p !== playerName);
        gameState.teamBudgets[teamCode] += fee;
        delete gameState.retentionFees[teamCode][playerName];
        localStorage.setItem('iplAuctionGameState', JSON.stringify(gameState));
        document.getElementById('remainingBudget').textContent = (gameState.teamBudgets[teamCode] / 100000).toFixed(2);
        document.getElementById('totalCost').textContent = (getTotalRetentionCost(gameState, teamCode) / 100000).toFixed(2);
        document.getElementById('retainedCount').textContent = `${gameState.retainedPlayers[teamCode].length}/6`;
        updateRetainedPlayers(gameState);
        displayPlayers(teams[teamCode], gameState);
    } catch (error) {
        console.error('Error in removePlayer:', error);
        alert('An error occurred while removing player. Please try again.');
    }
}

function clearSelection() {
    try {
        const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
        const teamCode = gameState.selectedTeam;
        gameState.retainedPlayers[teamCode] = [];
        gameState.retentionFees[teamCode] = {};
        gameState.teamBudgets[teamCode] = INITIAL_BUDGET;
        localStorage.setItem('iplAuctionGameState', JSON.stringify(gameState));
        document.getElementById('remainingBudget').textContent = (gameState.teamBudgets[teamCode] / 100000).toFixed(2);
        document.getElementById('totalCost').textContent = '0.00';
        document.getElementById('retainedCount').textContent = '0/6';
        updateRetainedPlayers(gameState);
        displayPlayers(teams[teamCode], gameState);
    } catch (error) {
        console.error('Error in clearSelection:', error);
        alert('An error occurred while clearing selection. Please try again.');
    }
}

function proceedToPreAuction() {
    try {
        console.log('Proceeding to pre-auction');
        window.location.href = 'preauction.html';
    } catch (error) {
        console.error('Error in proceedToPreAuction:', error);
        alert('An error occurred. Please try again.');
    }
}