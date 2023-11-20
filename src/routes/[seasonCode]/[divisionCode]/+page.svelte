<script>
/** @type {import('./$types').PageLoad} */

export let data;

console.log("Data -", data);

let seasonCode;
let divisionCode;

// Create reactive declarations for seasonCode and divisionCode
$: {
  seasonCode = data.seasonCode;
  divisionCode = data.divisionCode;
}

</script>
<div class="header">This is the Divisional Page for {seasonCode} {divisionCode}</div>