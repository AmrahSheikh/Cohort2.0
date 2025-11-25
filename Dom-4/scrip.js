const users = [
  {
    fullname: "Aisha Khan",
    image: "https://i.pinimg.com/1200x/2f/71/b7/2f71b79a52fb18baebcc28b8eae84ec4.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building beautiful and responsive UI experiences.",
    tags: ["JavaScript", "React", "CSS", "UI/UX"]
  },
  {
    fullname: "Rohan Mehta",
    image: "https://i.pinimg.com/736x/fe/a4/56/fea4568cdabdfb5c3ade0e7fe435858d.jpg",
    profession: "Full Stack Developer",
    description: "Loves building complete web applications from backend to frontend.",
    tags: ["Node.js", "MongoDB", "Express", "Tailwind"]
  },
  {
    fullname: "Priyansh Sharma",
    image: "https://i.pinimg.com/1200x/33/68/c4/3368c4cf650b851ed3f13b87bc882db9.jpg",
    profession: "UI/UX Designer",
    description: "Designing modern, minimal and user-friendly digital products.",
    tags: ["Figma", "Design", "Prototyping", "Branding"]
  },
  {
    fullname: "Sara Sheikh",
    image: "https://i.pinimg.com/736x/b8/b4/d9/b8b4d9220922fffbd151103ef1c215f6.jpg",
    profession: "Digital Marketer",
    description: "Helping brands grow using creative social media strategies.",
    tags: ["Marketing", "SEO", "Content", "Brand Growth"]
  }
];

let sum = "";
users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullname}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main')

main.innerHTML = sum