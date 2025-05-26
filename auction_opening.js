const teams = {
    CSK: {
        name: "Chennai Super Kings",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg",
        players: [
            { name: "Ruturaj Gaikwad", specialty: "Batsman", retention: 100, stats: { runs: 617, matches: 12, avg: 56.09 } },
            { name: "MS Dhoni", specialty: "Wicketkeeper-Batsman", retention: 100, stats: { runs: 161, matches: 14, catches: 13 } },
            { name: "Ravindra Jadeja", specialty: "All-Rounder", retention: 100, stats: { runs: 267, wickets: 10, matches: 14 } },
            { name: "Shivam Dube", specialty: "All-Rounder", retention: 85, stats: { runs: 396, wickets: 0, matches: 14 } },
            { name: "Matheesha Pathirana", specialty: "Bowler", retention: 80, stats: { wickets: 13, matches: 6, economy: 7.68 } },
            { name: "Noor Ahmad", specialty: "Bowler", retention: 75, stats: { wickets: 21, matches: 13, economy: 7.45 } },
            { name: "Ravichandran Ashwin", specialty: "All-Rounder", retention: 70, stats: { wickets: 9, matches: 15, economy: 7.98 } },
            { name: "Devon Conway", specialty: "Batsman", retention: 65, stats: { runs: 252, matches: 7, avg: 42.00 } },
            { name: "Khaleel Ahmed", specialty: "Bowler", retention: 60, stats: { wickets: 17, matches: 14, economy: 8.45 } },
            { name: "Rachin Ravindra", specialty: "All-Rounder", retention: 60, stats: { runs: 222, wickets: 4, matches: 10 } },
            { name: "Rahul Tripathi", specialty: "Batsman", retention: 55, stats: { runs: 199, matches: 9, avg: 24.87 } },
            { name: "Vijay Shankar", specialty: "All-Rounder", retention: 55, stats: { runs: 101, wickets: 0, matches: 7 } },
            { name: "Sam Curran", specialty: "All-Rounder", retention: 50, stats: { runs: 270, wickets: 16, matches: 13 } },
            { name: "Shaik Rasheed", specialty: "Batsman", retention: 50, stats: { runs: 0, matches: 0, avg: 0 } },
            { name: "Anshul Kamboj", specialty: "Bowler", retention: 45, stats: { wickets: 2, matches: 3, economy: 9.00 } },
            { name: "Mukesh Choudhary", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Deepak Hooda", specialty: "All-Rounder", retention: 40, stats: { runs: 145, wickets: 0, matches: 11 } },
            { name: "Gurjanpreet Singh", specialty: "Bowler", retention: 40, stats: { wickets: 0, matches: 0, economy: 0 } }
        ]
    },
    MI: {
        name: "Mumbai Indians",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg",
        players: [
            { name: "Hardik Pandya", specialty: "All-Rounder", retention: 100, stats: { runs: 246, wickets: 11, matches: 14 } },
            { name: "Jasprit Bumrah", specialty: "Bowler", retention: 100, stats: { wickets: 20, matches: 13, economy: 6.48 } },
            { name: "Rohit Sharma", specialty: "Batsman", retention: 100, stats: { runs: 417, matches: 14, avg: 29.78 } },
            { name: "Suryakumar Yadav", specialty: "Batsman", retention: 100, stats: { runs: 345, matches: 11, avg: 34.50 } },
            { name: "Tilak Varma", specialty: "Batsman", retention: 85, stats: { runs: 416, matches: 13, avg: 41.60 } },
            { name: "Trent Boult", specialty: "Bowler", retention: 80, stats: { wickets: 13, matches: 12, economy: 8.33 } },
            { name: "Naman Dhir", specialty: "All-Rounder", retention: 75, stats: { runs: 74, wickets: 0, matches: 7 } },
            { name: "Robin Minz", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 0, matches: 0, catches: 0 } },
            { name: "Karn Sharma", specialty: "Bowler", retention: 65, stats: { wickets: 7, matches: 9, economy: 9.25 } },
            { name: "Ryan Rickelton", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 0, matches: 0, catches: 0 } },
            { name: "Deepak Chahar", specialty: "Bowler", retention: 60, stats: { wickets: 13, matches: 10, economy: 8.66 } },
            { name: "Allah Ghazanfar", specialty: "Bowler", retention: 55, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Will Jacks", specialty: "All-Rounder", retention: 55, stats: { runs: 230, wickets: 2, matches: 8 } },
            { name: "Ashwani Kumar", specialty: "Bowler", retention: 50, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Mitchell Santner", specialty: "All-Rounder", retention: 50, stats: { runs: 49, wickets: 7, matches: 7 } },
            { name: "Reece Topley", specialty: "Bowler", retention: 45, stats: { wickets: 4, matches: 4, economy: 9.00 } },
            { name: "Shrijith Krishnan", specialty: "Wicketkeeper-Batsman", retention: 45, stats: { runs: 0, matches: 0, catches: 0 } },
            { name: "Raj Angad Bawa", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0 } }
        ]
    },
    RCB: {
        name: "Royal Challengers Bengaluru",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/Royal_Challengers_Bangalore_Logo.svg",
        players: [
            { name: "Virat Kohli", specialty: "Batsman", retention: 100, stats: { runs: 542, matches: 14, avg: 45.17 } },
            { name: "Rajat Patidar", specialty: "Batsman", retention: 85, stats: { runs: 395, matches: 13, avg: 30.38 } },
            { name: "Yash Dayal", specialty: "Bowler", retention: 70, stats: { wickets: 15, matches: 14, economy: 8.95 } },
            { name: "Josh Hazlewood", specialty: "Bowler", retention: 65, stats: { wickets: 4, matches: 5, economy: 8.50 } },
            { name: "Phil Salt", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 435, matches: 12, catches: 10 } },
            { name: "Jitesh Sharma", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 187, matches: 14, catches: 8 } },
            { name: "Liam Livingstone", specialty: "All-Rounder", retention: 55, stats: { runs: 111, wickets: 3, matches: 7 } },
            { name: "Rasikh Dar", specialty: "Bowler", retention: 55, stats: { wickets: 8, matches: 9, economy: 9.36 } },
            { name: "Suyash Sharma", specialty: "Bowler", retention: 50, stats: { wickets: 10, matches: 12, economy: 8.75 } },
            { name: "Krunal Pandya", specialty: "All-Rounder", retention: 50, stats: { runs: 143, wickets: 6, matches: 14 } },
            { name: "Bhuvneshwar Kumar", specialty: "Bowler", retention: 45, stats: { wickets: 11, matches: 14, economy: 8.95 } },
            { name: "Swapnil Singh", specialty: "All-Rounder", retention: 45, stats: { runs: 28, wickets: 6, matches: 7 } },
            { name: "Tim David", specialty: "Batsman", retention: 40, stats: { runs: 241, matches: 13, avg: 30.12 } },
            { name: "Romario Shepherd", specialty: "All-Rounder", retention: 40, stats: { runs: 58, wickets: 10, matches: 9 } },
            { name: "Nuwan Thushara", specialty: "Bowler", retention: 35, stats: { wickets: 8, matches: 7, economy: 9.25 } },
            { name: "Manoj Bhandage", specialty: "All-Rounder", retention: 35, stats: { runs: 0, wickets: 0, matches: 0 } },
            { name: "Jacob Bethel", specialty: "All-Rounder", retention: 30, stats: { runs: 0, wickets: 0, matches: 0 } },
            { name: "Devdutt Padikkal", specialty: "Batsman", retention: 30, stats: { runs: 261, matches: 12, avg: 23.72 } }
        ]
    },
    KKR: {
        name: "Kolkata Knight Riders",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg",
        players: [
            { name: "Rinku Singh", specialty: "Batsman", retention: 90, stats: { runs: 168, matches: 14, avg: 21.00 } },
            { name: "Varun Chakaravarthy", specialty: "Bowler", retention: 85, stats: { wickets: 21, matches: 14, economy: 8.04 } },
            { name: "Sunil Narine", specialty: "All-Rounder", retention: 85, stats: { runs: 488, wickets: 17, matches: 14 } },
            { name: "Andre Russell", specialty: "All-Rounder", retention: 80, stats: { runs: 222, wickets: 19, matches: 14 } },
            { name: "Harshit Rana", specialty: "Bowler", retention: 75, stats: { wickets: 19, matches: 13, economy: 9.08 } },
            { name: "Ramandeep Singh", specialty: "All-Rounder", retention: 70, stats: { runs: 125, wickets: 6, matches: 13 } },
            { name: "Quinton de Kock", specialty: "Wicketkeeper-Batsman", retention: 65, stats: { runs: 250, matches: 11, catches: 8 } },
            { name: "Rahmanullah Gurbaz", specialty: "Wicketkeeper-Batsman", retention: 60, stats: { runs: 238, matches: 11, catches: 9 } },
            { name: "Angkrish Raghuvanshi", specialty: "Batsman", retention: 60, stats: { runs: 163, matches: 10, avg: 20.37 } },
            { name: "Venkatesh Iyer", specialty: "All-Rounder", retention: 55, stats: { runs: 370, wickets: 0, matches: 14 } },
            { name: "Anrich Nortje", specialty: "Bowler", retention: 55, stats: { wickets: 7, matches: 6, economy: 9.00 } },
            { name: "Vaibhav Arora", specialty: "Bowler", retention: 50, stats: { wickets: 11, matches: 10, economy: 9.25 } },
            { name: "Mayank Markande", specialty: "Bowler", retention: 50, stats: { wickets: 8, matches: 7, economy: 9.50 } },
            { name: "Rovman Powell", specialty: "All-Rounder", retention: 45, stats: { runs: 127, wickets: 0, matches: 10 } },
            { name: "Manish Pandey", specialty: "Batsman", retention: 45, stats: { runs: 42, matches: 3, avg: 21.00 } },
            { name: "Spencer Johnson", specialty: "Bowler", retention: 40, stats: { wickets: 4, matches: 5, economy: 9.00 } },
            { name: "Luvnith Sisodia", specialty: "Wicketkeeper-Batsman", retention: 40, stats: { runs: 0, matches: 0, catches: 0 } },
            { name: "Ajinkya Rahane", specialty: "Batsman", retention: 35, stats: { runs: 242, matches: 13, avg: 22.00 } }
        ]
    },
    SRH: {
        name: "Sunrisers Hyderabad",
        logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg",
        players: [
            { name: "Heinrich Klaasen", specialty: "Wicketkeeper-Batsman", retention: 95, stats: { runs: 479, matches: 12, catches: 12 } },
            { name: "Pat Cummins", specialty: "Bowler", retention: 90, stats: { wickets: 17, matches: 13, economy: 8.54 } },
            { name: "Abhishek Sharma", specialty: "All-Rounder", retention: 85, stats: { runs: 484, wickets: 2, matches: 14 } },
            { name: "Travis Head", specialty: "Batsman", retention: 80, stats: { runs: 567, matches: 13, avg: 43.61 } },
            { name: "Nitish Kumar Reddy", specialty: "All-Rounder", retention: 75, stats: { runs: 303, wickets: 3, matches: 11 } },
            { name: "Ishan Kishan", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 320, matches: 14, catches: 10 } },
            { name: "Mohammad Shami", specialty: "Bowler", retention: 70, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Harshal Patel", specialty: "Bowler", retention: 65, stats: { wickets: 24, matches: 14, economy: 9.73 } },
            { name: "Rahul Chahar", specialty: "Bowler", retention: 60, stats: { wickets: 10, matches: 12, economy: 8.50 } },
            { name: "Adam Zampa", specialty: "Bowler", retention: 60, stats: { wickets: 2, matches: 2, economy: 8.00 } },
            { name: "Atharva Taide", specialty: "Batsman", retention: 55, stats: { runs: 186, matches: 7, avg: 26.57 } },
            { name: "Abhinav Manohar", specialty: "Batsman", retention: 55, stats: { runs: 108, matches: 6, avg: 18.00 } },
            { name: "Simarjeet Singh", specialty: "Bowler", retention: 50, stats: { wickets: 3, matches: 4, economy: 8.75 } },
            { name: "Zeeshan Ansari", specialty: "Bowler", retention: 50, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Jaydev Unadkat", specialty: "Bowler", retention: 45, stats: { wickets: 8, matches: 11, economy: 9.00 } },
            { name: "Brydon Carse", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Kamindu Mendis", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0 } },
            { name: "Aniket Verma", specialty: "Bowler", retention: 40, stats: { wickets: 0, matches: 0, economy: 0 } }
        ]
    },
    DC: {
        name: "Delhi Capitals",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals_Logo.svg",
        players: [
            { name: "Axar Patel", specialty: "All-Rounder", retention: 90, stats: { runs: 235, wickets: 11, matches: 14 } },
            { name: "Kuldeep Yadav", specialty: "Bowler", retention: 85, stats: { wickets: 16, matches: 11, economy: 8.66 } },
            { name: "Tristan Stubbs", specialty: "Batsman", retention: 80, stats: { runs: 378, matches: 14, avg: 54.00 } },
            { name: "Abishek Porel", specialty: "Wicketkeeper-Batsman", retention: 75, stats: { runs: 327, matches: 14, catches: 10 } },
            { name: "KL Rahul", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 520, matches: 14, catches: 9 } },
            { name: "Harry Brook", specialty: "Batsman", retention: 65, stats: { runs: 113, matches: 4, avg: 28.25 } },
            { name: "Jake Fraser-McGurk", specialty: "Batsman", retention: 65, stats: { runs: 330, matches: 9, avg: 36.66 } },
            { name: "Karun Nair", specialty: "Batsman", retention: 60, stats: { runs: 0, matches: 0, avg: 0 } },
            { name: "T Natarajan", specialty: "Bowler", retention: 60, stats: { wickets: 19, matches: 12, economy: 8.24 } },
            { name: "Mitchell Starc", specialty: "Bowler", retention: 55, stats: { wickets: 17, matches: 13, economy: 10.61 } },
            { name: "Sameer Rizvi", specialty: "Batsman", retention: 55, stats: { runs: 51, matches: 8, avg: 12.75 } },
            { name: "Ashutosh Sharma", specialty: "Batsman", retention: 50, stats: { runs: 189, matches: 11, avg: 27.00 } },
            { name: "Mohit Sharma", specialty: "Bowler", retention: 50, stats: { wickets: 13, matches: 12, economy: 10.00 } },
            { name: "Faf du Plessis", specialty: "Batsman", retention: 45, stats: { runs: 438, matches: 14, avg: 31.28 } },
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
            { name: "Sanju Samson", specialty: "Wicketkeeper-Batsman", retention: 95, stats: { runs: 531, matches: 14, catches: 11 } },
            { name: "Yashasvi Jaiswal", specialty: "Batsman", retention: 90, stats: { runs: 435, matches: 14, avg: 31.07 } },
            { name: "Riyan Parag", specialty: "All-Rounder", retention: 85, stats: { runs: 573, wickets: 0, matches: 14 } },
            { name: "Dhruv Jurel", specialty: "Wicketkeeper-Batsman", retention: 80, stats: { runs: 195, matches: 13, catches: 9 } },
            { name: "Shimron Hetmyer", specialty: "Batsman", retention: 75, stats: { runs: 113, matches: 10, avg: 28.25 } },
            { name: "Sandeep Sharma", specialty: "Bowler", retention: 70, stats: { wickets: 13, matches: 11, economy: 8.18 } },
            { name: "Jofra Archer", specialty: "Bowler", retention: 65, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Wanindu Hasaranga", specialty: "All-Rounder", retention: 65, stats: { wickets: 9, matches: 8, economy: 8.75 } },
            { name: "Maheesh Theekshana", specialty: "Bowler", retention: 60, stats: { wickets: 6, matches: 8, economy: 8.00 } },
            { name: "Akash Madhwal", specialty: "Bowler", retention: 60, stats: { wickets: 5, matches: 5, economy: 9.75 } },
            { name: "Kumar Kartikeya Singh", specialty: "Bowler", retention: 55, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Nitish Rana", specialty: "Batsman", retention: 55, stats: { runs: 226, matches: 10, avg: 25.11 } },
            { name: "Tushar Deshpande", specialty: "Bowler", retention: 50, stats: { wickets: 17, matches: 13, economy: 8.64 } },
            { name: "Shubham Dubey", specialty: "Batsman", retention: 50, stats: { runs: 66, matches: 6, avg: 16.50 } },
            { name: "Yudhvir Charak", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Fazal Farooqi", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Vaibhav Suryavanshi", specialty: "Batsman", retention: 40, stats: { runs: 0, matches: 0, avg: 0 } },
            { name: "Kwena Maphaka", specialty: "Bowler", retention: 40, stats: { wickets: 1, matches: 2, economy: 10.00 } }
        ]
    },
    PBKS: {
        name: "Punjab Kings",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/14/Punjab_Kings_Logo.svg",
        players: [
            { name: "Shreyas Iyer", specialty: "Batsman", retention: 90, stats: { runs: 351, matches: 14, avg: 27.00 } },
            { name: "Yuzvendra Chahal", specialty: "Bowler", retention: 85, stats: { wickets: 18, matches: 14, economy: 8.18 } },
            { name: "Arshdeep Singh", specialty: "Bowler", retention: 80, stats: { wickets: 19, matches: 14, economy: 9.00 } },
            { name: "Marcus Stoinis", specialty: "All-Rounder", retention: 75, stats: { runs: 388, wickets: 4, matches: 14 } },
            { name: "Glenn Maxwell", specialty: "All-Rounder", retention: 75, stats: { runs: 243, wickets: 6, matches: 10 } },
            { name: "Shashank Singh", specialty: "All-Rounder", retention: 70, stats: { runs: 354, wickets: 0, matches: 14 } },
            { name: "Prabhsimran Singh", specialty: "Wicketkeeper-Batsman", retention: 70, stats: { runs: 334, matches: 14, catches: 10 } },
            { name: "Harpreet Brar", specialty: "All-Rounder", retention: 65, stats: { runs: 28, wickets: 7, matches: 13 } },
            { name: "Vijaykumar Vyshak", specialty: "Bowler", retention: 60, stats: { wickets: 1, matches: 2, economy: 9.50 } },
            { name: "Yash Thakur", specialty: "Bowler", retention: 60, stats: { wickets: 11, matches: 10, economy: 9.80 } },
            { name: "Marco Jansen", specialty: "Bowler", retention: 55, stats: { wickets: 1, matches: 3, economy: 9.00 } },
            { name: "Josh Inglis", specialty: "Wicketkeeper-Batsman", retention: 55, stats: { runs: 0, matches: 0, catches: 0 } },
            { name: "Lockie Ferguson", specialty: "Bowler", retention: 50, stats: { wickets: 10, matches: 7, economy: 9.25 } },
            { name: "Azmatullah Omarzai", specialty: "All-Rounder", retention: 50, stats: { runs: 0, wickets: 0, matches: 0 } },
            { name: "Harnoor Pannu", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Kuldeep Sen", specialty: "Bowler", retention: 45, stats: { wickets: 0, matches: 0, economy: 0 } },
            { name: "Priyansh Arya", specialty: "Batsman", retention: 40, stats: { runs: 0, matches: 0, avg: 0 } },
            { name: "Aaron Hardie", specialty: "All-Rounder", retention: 40, stats: { runs: 0, wickets: 0, matches: 0 } }
        ]
    }
};

window.onload = function() {
    const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
    const teamCode = gameState.selectedTeam;
    if (!teamCode || !teams[teamCode]) {
        alert('No team selected! Redirecting to home page.');
        window.location.href = 'index.html';
        return;
    }

    const team = teams[teamCode];
    document.getElementById('teamName').textContent = team.name;
    document.getElementById('teamLogo').src = team.logo;

    const playerList = document.getElementById('playerList');
    team.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';
        playerCard.innerHTML = `
            <img src="${team.logo}" alt="${player.name} Logo">
            <h3>${player.name}</h3>
            <p>${player.specialty}</p>
            <button class="dropdown-btn" onclick="toggleDropdown(this)">View Stats</button>
            <div class="dropdown-content">
                <p>Matches: ${player.stats.matches}</p>
                ${player.specialty.includes('Batsman') ? `<p>Runs: ${player.stats.runs}</p><p>Average: ${player.stats.avg || 'N/A'}</p>` : ''}
                ${player.specialty.includes('Bowler') || player.specialty.includes('All-Rounder') ? `<p>Wickets: ${player.stats.wickets || 0}</p><p>Economy: ${player.stats.economy || 'N/A'}</p>` : ''}
                ${player.specialty.includes('Wicketkeeper') ? `<p>Catches: ${player.stats.catches || 0}</p>` : ''}
            </div>
        `;
        playerList.appendChild(playerCard);
    });

    // Save the current state to ensure team selection is preserved
    localStorage.setItem('iplAuctionGameState', JSON.stringify({ ...gameState, selectedTeam: teamCode }));
};

function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.classList.toggle('show');
}

function proceedToRetention() {
    // Save the current game state before redirecting
    const gameState = JSON.parse(localStorage.getItem('iplAuctionGameState') || '{}');
    localStorage.setItem('iplAuctionGameState', JSON.stringify({ ...gameState, selectedTeam: gameState.selectedTeam }));
    window.location.href = 'retention.html';
}