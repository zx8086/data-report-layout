<script lang="ts" >
/** @type {import('./$types').PageLoad} */

export let data: any;

console.log("Data -", data);

let seasonCode: any;
let divisionCode: any;

// Create reactive declarations for seasonCode and divisionCode
$: {
  seasonCode = data.seasonCode;
  divisionCode = data.divisionCode;
}

</script>
<div>This is the Divisional Page for {seasonCode} {divisionCode}</div>