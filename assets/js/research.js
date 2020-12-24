/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");
const citeTable5 = document.querySelector(".citeT5");
const citeTable6 = document.querySelector(".citeT6");
const citeTable7 = document.querySelector(".citeT7");
const citeTable8 = document.querySelector(".citeT8");

const research = [
    {
        title : "A Survey Conducted in the masses, to find their Interests in Smartphones",
        authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        conferences : "The 58th Annual Meeting of the Association for Computational Linguistics",
        researchYr : 2020,
        citebox : "#popup1",
        image : "assets/images/research-page/inteferenceNetwork.png"
    }
];

const cite1 = [{
    vancouver : "We found out that most people uses their Smartphones for Entertainment Perposes",
    bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];
    
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="assets/images/research-page/smartphoneRearch.png" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> How Public is Using Smartphones </a> 
            <div> Aazam Jutt, Omer Bhatti, Junaid Ashfaq, Muhammad Feroz </div> <div class="rConferences"> It was our research Project as a University Assignment and was conducted online, becuase of Global Pandemic COVID-19.
            <div class="researchY">2020</div>
            </div>
            
            <!--CITE BUTTON-->
            <div>
            
            <a href="#" class="button button-accent button-small text-right button-abstract">ABSTRACT</a>
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a>

            </div>
            </td>
            </tr>

            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);