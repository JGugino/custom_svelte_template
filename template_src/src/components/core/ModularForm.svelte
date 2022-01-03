<script>
    import { FormItem } from '../../scripts/form_item';
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    export let formSubmitText = "Submit";
    export let formItems = [new FormItem("test-input", "text", "test", true)];

    const formSubmit = (e) => {
        const formData = new FormData(e.target);
        let formInfo = [];

        for (const [k, v] of formData.entries()) {
            formItems.forEach(e => {
                if(k == e.inputName){
                    let item = {inputName: e.inputName, inputValue: v};
                    formInfo = [...formInfo, item];
		        }
            });
	    }

        dispatch("formSubmitted", formInfo);
    }

</script>

<form on:submit|preventDefault={formSubmit} id="mod-form" class="flex">
    {#each formItems as item}
        {#if item.inputRequired == true}
            <input type={item.inputType} name={item.inputName} placeholder={item.inputPlaceholder} required=required>
        {:else}
            <input type={item.inputType} name={item.inputName} placeholder={item.inputPlaceholder}>
        {/if}
    {/each}
    <button type="submit">{formSubmitText}</button>
</form>

<style>
    #mod-form{
        --form-default-text-color: black;

        --form-input-border-color: grey;
        --form-input-border-size: 1px;
        --form-input-font-size: 14pt;
        --form-input-selected-border-color: rgb(0, 185, 231);
        
        --form-button-font-size: 14pt;
        --form-button-hover-bg-color: rgb(0, 185, 231);
        --form-button-hover-text-color: white;

        flex-direction: column;
        align-items: center;
    }

    #mod-form input{
        color: var(--form-default-text-color);
        font-size: var(--form-input-font-size);
        padding: 1em 6em 1em 1em;
        margin: 0.6rem 0;
        border-radius: 0.6rem;
        border: var(--form-input-border-size) solid var(--form-input-border-color);
        transition: border ease 200ms;
    }

    #mod-form input:hover{
        border: var(--form-input-border-size) solid var(--form-input-selected-border-color);
    }

    #mod-form input:focus{
        outline: none;
        border: var(--form-input-border-size) solid var(--form-input-selected-border-color);
    }

    #mod-form button{
        color: var(--form-default-text-color);
        font-size: var(--form-button-font-size);
        padding: 0.8em 2em;
        border-radius: 0.6rem;
        border: var(--form-input-border-size) solid var(--form-input-border-color);
        transition: background ease 200ms, color ease 200ms;
    }

    #mod-form button:hover{
        background: var(--form-button-hover-bg-color);
        color: var(--form-button-hover-text-color);
    }
</style>