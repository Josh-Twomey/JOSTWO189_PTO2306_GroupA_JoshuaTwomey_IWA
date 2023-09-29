const nickname = "Timmy";
const firstname = "Timothy";
//Added display variable to set string that needs to be displayed accordingly
let display = '';

//If-Statement to test if variables are populated and set display to correct string if so
if (nickname.length > 0) {
    display = `, ${nickname}`
}else if (firstname.length > 0) {
  display = `, ${firstname}`;
} else 
{console.log(`Good Morning${display}!`);}
