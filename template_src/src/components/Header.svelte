<script lang="ts">
    /* headerInfo Object Structure
        {
            headerType: 'text/image/both',
            headerText: 'Example Text',
            headerImgSrc: './assets/example.png',
            headerImgAlt: 'header alt'
            navigationLinks: [
                {linkText: 'Example Link', linkHref: '#test'}
            ]
        }
     */

    export let headerInfo = {

        //headerType: text/image/both
        headerType: 'both',
        headerText: 'Header Text',
        headerImgSrc: './favicon.png',
        headerImgAlt: 'header alt',
        navigationLinks: [
            {linkText: 'Link One', linkHref: '#one'},
            {linkText: 'Link Two', linkHref: '#two'},
            {linkText: 'Link Three', linkHref: '#three'}
        ]
    };
</script>

<header class="flex">
    <div id="header-texts" class="flex">
        {#if headerInfo.headerType == 'image'|| headerInfo.headerType == 'both'}
            <img class="header-image" src={headerInfo.headerImgSrc} alt={headerInfo.headerImgAlt}>
        {/if}
        {#if headerInfo.headerType == 'text'|| headerInfo.headerType == 'both'}
            <h1 class="header-text">{headerInfo.headerText}</h1>
        {/if}
    </div>
    <nav>
        <ul>
            {#each headerInfo.navigationLinks as link}
                <li class="styleless-horizontal-list"><a class="header-link" href={link.linkHref}>{link.linkText}</a></li>
            {/each}
        </ul>
    </nav>
</header>

<style>

    header{
        --header-bg-color: rgba(0,0,0, 100%);
        --header-primary-text-color: rgba(255,255,255, 100%);
        --header-highlight-text-color: rgb(0, 185, 231);

        --header-padding: 2rem;

        --header-text-size: 3rem;
        --header-image-size: 4rem;
        --header-texts-gap: 1.2rem;

        --header-link-font-size: 1.2rem;
        --header-link-spacing: 1rem;
        --header-link-ease-time: 300ms;

        --header-modal-bg-color: rgba(0,0,0, 40%);

        width: 100%;
        padding: var(--header-padding);
        align-items: center;
        background: var(--header-bg-color);
        color: var(--header-primary-text-color);
    }

    header > *{
        flex: 1 1 33%;
    }

    #header-texts{
        align-items: center;
        gap: var(--header-texts-gap);
    }

    .header-text{
        font-size: var(--header-text-size);
    }

    .header-image{
        width: var(--header-image-size);
    }

    .header-link{
        font-size: var(--header-link-font-size);
        text-decoration: none;
        margin: 0 var(--header-link-spacing);
        color: var(--header-primary-text-color);
        transition: color var(--header-link-ease-time) ease;
    }

    .header-link:hover{
        color: var(--header-highlight-text-color);
    }
</style>