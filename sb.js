

const skillscontentEl = document.getElementById("Skillscontent");
const educontentEl = document.getElementById("Educationcontent");
const expcontentEl = document.getElementById("Experiencecontent");
educontentEl.style.display="none";
expcontentEl.style.display="none";

const skills = document.getElementById("skills");
const edu = document.getElementById("edu");
const exp = document.getElementById("exp");



const  showskills= () => {
    educontentEl.style.display="none";
    expcontentEl.style.display="none";
    skillscontentEl.style.display="contents";

    skills.setAttribute("class","tabs active-link");
    edu.setAttribute("class","tabs");
    exp.setAttribute("class","tabs");
}
const showedu = () => {
    educontentEl.style.display="contents";
    expcontentEl.style.display="none";
    skillscontentEl.style.display="none";

    edu.setAttribute("class","tabs active-link");
    skills.setAttribute("class","tabs");
    exp.setAttribute("class","tabs");
}
const showexp = () => {
    educontentEl.style.display="none";
    expcontentEl.style.display="contents";
    skillscontentEl.style.display="none";

    exp.setAttribute("class","tabs active-link");
    edu.setAttribute("class","tabs");
    skills.setAttribute("class","tabs");
}