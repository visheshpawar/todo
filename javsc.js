var flag = 1;
var ct=0;
var count =0;

var t =0;


function clip()
{
    let x=document.getElementById("mad");
    let temp=x.value;
    
    let lengt = temp.length;

    for(let i=0;i<lengt;i++ )
        {
             if(temp[i]!=" ")
                    {
                     t=1;
                    break;
                    }
        }



    if (t==0)
        {
            x.value="";
            return;
        }




        
    count=count+1;
    if(count==1)
    {
        document.getElementById("hdr").style.display="none";
    }
 
    x.value="";

const cardin = document.createElement("div" );

cardin.setAttribute("id","cardin");


const las = document.getElementById("cards");
las.appendChild(cardin);



const cen = document.createElement("div");
const lak = document.createTextNode(temp);
cen.appendChild(lak);
cen.setAttribute("id", "cen");
cardin.appendChild(cen);


const btm = document.createElement("div");
btm.setAttribute("id", "btm");




const lef = document.createElement("div");
const tex1 = document.createTextNode("Mark as done");
lef.appendChild(tex1);
lef.setAttribute("id", "lef") ;
lef.addEventListener('click', () =>
    {
    
        



        if(flag==1)
            {
                cen.style.textDecoration="line-through";
           lef.innerText="Mark as undone";
                flag=0;
                return;
            }
            
            if(flag==0)
                {
                    cen.style.textDecoration="none";
                    lef.innerText="Mark as done";
                    flag=1;
                     return;
                }








    })



const rig = document.createElement("div");
const tex2 = document.createTextNode("Remove");
rig.appendChild(tex2);
rig.setAttribute("id", "rig") ;

rig.addEventListener('click', () =>
{

    cardin.remove();
    count = count-1;
    if (count===0)
        {
            document.getElementById("hdr").style.display="block";
        }    
    
})

btm.appendChild(lef);
btm.appendChild(rig);

cardin.appendChild(btm);

}















