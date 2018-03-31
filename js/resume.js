var personalInfo = {
    name: "Manal Liaquat",
    address: "Makhdoom Colony, Jamshed Road no#2, Karachi.",
    contact: "03110206023",
    email: "m.manalliaquat@gmail.com",
    fatherName: "Liaquat Ali",
    dob: "21 August, 1997",
    religion: "Islam",
    nationality: "Pakistani",
    language: "Urdu, English",
    meritalStatus: "Single"
};

var qualification = {
    qual1: "SSC (Computer Science) from The Indus Grammar School in 2014.",
    qual2: "INTERMEDIATE in (PRE-ENGINEERING) from Govt. Science College in 2016.",
    qual3: "Bachelors in Computer Science is started in 2017."
};

var experience = {
    exp1: "Worked As SEO / SMO and Data Entry, June 2015 - Jan 2016.",
    exp2: "One year teaching experience at Coaching Center."
};

var skills = {
    skill1: "Content Management",
    skill2: "UI Management",
    skill3: "Classified Ads",
    skill4: "Social Bookmarking",
    skill5: "Directories Submission",
    skill6: "Blog Posting / Commenting",
    skill7: "Social Media Optimization (SMO)",
    skill8: "Page / Profile Management",
    skill9: "Social Engagement",
    skill10: "C-language",
    skill11: "HTML5, CSS3 and JavaScript",
    skill12: "MS Office",
    skill13: "Wordpress",
    skill14: "Adobe Photoshop"
};

var headings = {
    hdng1: "OBJECTIVE",
    hdng2: "ACADEMIC QUALIFICATION",
    hdng3: "EXPERIENCE",
    hdng4: "PROFESSIONAL SKILLS",
    hdng5: "PERSONAL INFORMATION",
    hdng6: "COMPUTER SKILLS / COURSES",
    hdng7: "PERSONAL STRENGTH",
    hdng8: "REFERENCE",
}

var content = {
    cnt1: "To obtain a challenging position utilizing all of my skill and joining an advance Organization, this offers opportunities for career development having futuristic approach.",
    cnt2: "Able to work under pressure, Hardworking, Honest, Optimistic, ready to face challenges, ability to manage a team or working as a team member and complete daily tasks.",
    cnt3: "Will be furnished on request."
}

var div1 = document.getElementById("info");
var infoH2 = div1.getElementsByTagName("h2");
var infoP = div1.getElementsByTagName("p");

infoH2[0].innerHTML = personalInfo.name;
infoP[0].innerHTML = personalInfo.address;
infoP[1].innerHTML = personalInfo.contact;
infoP[2].innerHTML = personalInfo.email;
infoP[2].parentNode.setAttribute("href", "mailto:m.manalliaquat@gmail.com")

var img = div1.getElementsByTagName("IMG");
img[0].setAttribute("src", "img/pic.jpg");

var div2 = document.getElementById("resumeBody");
var bodyH4 = div2.getElementsByTagName("H6");
var bodyP = div2.getElementsByTagName("p");

bodyH4[0].innerHTML = headings.hdng1;
bodyP[0].innerHTML = content.cnt1;

bodyH4[1].innerHTML = headings.hdng2;
bodyP[1].innerHTML = qualification.qual1;
bodyP[2].innerHTML = qualification.qual2;
bodyP[3].innerHTML = qualification.qual3;

bodyH4[2].innerHTML = headings.hdng3;
bodyP[4].innerHTML = experience.exp1;
bodyP[5].innerHTML = experience.exp2;

bodyH4[3].innerHTML = headings.hdng4;
bodyP[6].innerHTML = skills.skill1;
bodyP[7].innerHTML = skills.skill2;
bodyP[8].innerHTML = skills.skill3;
bodyP[9].innerHTML = skills.skill4;
bodyP[10].innerHTML = skills.skill5;
bodyP[11].innerHTML = skills.skill6;
bodyP[12].innerHTML = skills.skill7;
bodyP[13].innerHTML = skills.skill8;
bodyP[14].innerHTML = skills.skill9;

bodyH4[4].innerHTML = headings.hdng5;
bodyP[16].innerHTML = personalInfo.name;
bodyP[18].innerHTML = personalInfo.fatherName;
bodyP[20].innerHTML = personalInfo.dob;
bodyP[22].innerHTML = personalInfo.religion;
bodyP[24].innerHTML = personalInfo.nationality;
bodyP[26].innerHTML = personalInfo.language;

bodyH4[5].innerHTML = headings.hdng6;
bodyP[27].innerHTML = skills.skill10;
bodyP[28].innerHTML = skills.skill11;
bodyP[29].innerHTML = skills.skill12;
bodyP[30].innerHTML = skills.skill13;
bodyP[31].innerHTML = skills.skill14;

bodyH4[6].innerHTML = headings.hdng7;
bodyP[32].innerHTML = content.cnt2;

bodyH4[7].innerHTML = headings.hdng8;
bodyP[33].innerHTML = content.cnt3;


//styling
for (let i = 0; i < bodyH4.length; i++) {
    bodyH4[i].setAttribute("class", "text-primary");
    bodyH4[i].className += " smhd"
}