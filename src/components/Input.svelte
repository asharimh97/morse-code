<script>
  import { generateCode } from "../utils/generator";
  // export so it becomes the component props
  // assign the variable value so it becomes the default value
  export let word = "";

  // while this one is an internal state data
  // let sembarang = "hiohoho";
  $: parsed = word ? generateCode(word) : "";
</script>

<textarea bind:value={word} rows="3" cols="100" />

<p>Translation:</p>
<textarea value={parsed} rows="3" cols="100" />

<style>
  textarea {
    min-height: 75px;
    height: 75px;
    max-height: 75px;

    min-width: 850px;
    width: 850px;
    max-width: 850px;
  }
</style>
