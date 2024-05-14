const semesterList = ["Fall 2019", "Spring 2020", "Fall 2020", "Spring 2021", "Fall 2021", "Spring 2022", "Fall 2022", "Spring 2023"]
const classNameList = {
    /* Fall 2019 */ 0: [
        {
            "ClassName": "Chemistry",
            "ClassCode": "CHEM 10171"
        },
        {
            "ClassName": "Intro Engineering 1",
            "ClassCode": "EG 10111"
        },
        {
            "ClassName": "Physics 1",
            "ClassCode": "PHYS 10310"
        },
        {
            "ClassName": "Writing and Rhetoric",
            "ClassCode": "WR 13300"
        }
    ],
    /* Spring 2020 */ 1: [
        {
            "ClassName": "Intro Engineering 2",
            "ClassCode": "EG 10112"
        },
        {
            "ClassName": "Calculus 3",
            "ClassCode": "MATH 20550"
        },
        {
            "ClassName": "Physics 2",
            "ClassCode": "PHYS 10320"
        },
        {
            "ClassName": "Foundations of Theology",
            "ClassCode": "THEO 10001"
        },
        {
            "ClassName": "Economic Nationalism",
            "ClassCode": "POLS 13181"
        }
    ],
    /* Fall 2020 */ 2: [
        {
            "ClassName": "Greek Art and Architecture",
            "ClassCode": "ARHI 30120"
        },
        {
            "ClassName": "Discrete Mathematics",
            "ClassCode": "CSE 20110"
        },
        {
            "ClassName": "Fundamentals of Computing",
            "ClassCode": "CSE 20311"
        },
        {
            "ClassName": "Linear Algebra and Differential Equations",
            "ClassCode": "MATH 20580"
        },
        {
            "ClassName": "Introduction to Philosophy",
            "ClassCode": "PHIL 20101"
        }
    ],
    /* Spring 2021 */ 3: [
        {
            "ClassName": "Logic Design",
            "ClassCode": "CSE 20221"
        },
        {
            "ClassName": "Systems Programming",
            "ClassCode": "CSE 20289"
        },
        {
            "ClassName": "Data Structures",
            "ClassCode": "CSE 20312"
        },
        {
            "ClassName": "20th Century British History",
            "ClassCode": "HIST 34420"
        },
        {
            "ClassName": "The Catholic Faith",
            "ClassCode": "THEO 20251"
        }
    ],
    /* Fall 2021 */ 4: [
        {
            "ClassName": "Theory of Computing",
            "ClassCode": "CSE 30151"
        },
        {
            "ClassName": "Database Concepts",
            "ClassCode": "CSE 30246"
        },
        {
            "ClassName": "Operation Systems",
            "ClassCode": "CSE 30341"
        },
        {
            "ClassName": "Programming Challenges",
            "ClassCode": "CSE 30872"
        },
        {
            "ClassName": "Differential Equations",
            "ClassCode": "MATH 30650"
        }
    ],
    /* Spring 2022 */ 5: [
        {
            "ClassName": "Probability and Statistics",
            "ClassCode": "ACMS 30440"
        },
        {
            "ClassName": "Computer Architecture",
            "ClassCode": "CSE 30321"
        },
        {
            "ClassName": "Programming Paradigms",
            "ClassCode": "CSE 30332"
        },
        {
            "ClassName": "Algorithms",
            "ClassCode": "CSE 40113"
        },
        {
            "ClassName": "Droid Building",
            "ClassCode": "CSE 40883"
        }
    ],
    /* Fall 2022 */ 6: [
        {
            "ClassName": "Ethics",
            "ClassCode": "CSE 40175"
        },
        {
            "ClassName": "Cryptography",
            "ClassCode": "CSE 40622"
        },
        {
            "ClassName": "Data Science",
            "ClassCode": "CSE 40647"
        },
        {
            "ClassName": "Modern Web Development",
            "ClassCode": "CSE 40693"
        },
        {
            "ClassName": "Philosophy and Film",
            "ClassCode": "PHIL 20440"
        }
    ],
    /* Spring 2023 */ 7: [
        {
            "ClassName": "Biometrics",
            "ClassCode": "CSE 40537"
        },
        {
            "ClassName": "Interactive Dialogue Systems",
            "ClassCode": "CSE 40982"
        },
        {
            "ClassName": "Computer Security",
            "ClassCode": "CSE 40567"
        },
        {
            "ClassName": "History of the Age of Revolution",
            "ClassCode": "HIST 30477"
        }
    ],
};

var allClasses = document.getElementById("allClasses");
var semesterDisplayBools = [false, false, false, false, false, false, false, false];

function generateAllSemesters() {
    for (let i = 0; i < semesterList.length; i++) {
        generateSemesterBox(i);
    }
}

function generateSemesterBox(semesterNumber) {
    var semesterDiv = document.createElement("div");
    semesterDiv.className = "semester";
    var semesterTitle = document.createElement("li");
    semesterTitle.textContent = semesterList[semesterNumber];
    var expandImage = document.createElement("img");
    expandImage.src = location.pathname + "/../../images/expand.png";
    semesterTitle.appendChild(expandImage);
    var classList = document.createElement("ul");
    classList.className = "class-list";
    for (let i = 0; i < classNameList[semesterNumber].length; i++) {
        var classString = classNameList[semesterNumber][i]["ClassName"];
        var classCodeString = "(" + classNameList[semesterNumber][i]["ClassCode"] + ")";
        var classListItem = document.createElement("li");
        var classCodeItem = document.createElement("div");
        classCodeItem.textContent = classCodeString;
        classListItem.textContent = classString;
        classListItem.appendChild(classCodeItem);
        classList.appendChild(classListItem);
    }
    semesterDiv.appendChild(semesterTitle);
    semesterDiv.addEventListener('click', () => {
        semesterDisplayBools[semesterNumber] = !semesterDisplayBools[semesterNumber];
        if (semesterDisplayBools[semesterNumber]) {
            semesterDiv.appendChild(classList);
        } else {
            semesterDiv.removeChild(classList);
        }
      });
    allClasses.appendChild(semesterDiv);
}

generateAllSemesters();