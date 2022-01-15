<script>
  import Input from "./components/Input.svelte";

  let name = "Scouts";
  let input = "";
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Put your input here to convert your morse</p>
  <Input word={input} />
  <p>{input}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
