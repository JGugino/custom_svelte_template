<script>
	import Header from './components/core/Header.svelte';
	import ContentHolder from './components/core/ContentHolder.svelte';
	import Footer from './components/core/Footer.svelte';

	import { spaRouter } from "./stores/router_store";

	//Info used to fill out the header component
	const headerInfo = {
		headerType: 'both',
        headerText: 'Example Text',
        headerImgSrc: './favicon.png',
        headerImgAlt: 'header logo',
        navigationLinks: [
            {linkId: 0, linkText: 'Link One', linkHref: '#one'},
			{linkId: 1, linkText: 'Link Two', linkHref: '#two'},
			{linkId: 2, linkText: 'Link Three', linkHref: '#three'},
			{linkId: 3, linkText: 'Link Four', linkHref: '#four'},
        ]
	}

	//Info used to fill out the footer component
	const footerInfo = {
		copyrightName: 'John Doe',
        copyrightYear: '2021',
        socialLinks: {
			facebook: "https://facebook.com",
			twitter: "https://twitter.com",
			instagram: "https://instagram.com",
			youtube: "https://youtube.com"
		}
	}

	//Function that is called when a header link gets clicked, sends the link id and link href with event.
	const headerLinkClicked = (event)=>{
		$spaRouter.currentRoute = appRouter.changeCurrentRouteByID(event.detail.id);
	}

</script>

<Header headerInfo={headerInfo} on:headerLinkClicked={headerLinkClicked}></Header>

<main>
	<ContentHolder></ContentHolder>
</main>

<Footer footerInfo={footerInfo}></Footer>

<style>

</style>