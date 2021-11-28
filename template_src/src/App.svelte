<script lang="ts">
	import Header from './components/Header.svelte';
	import ContentHolder from './components/ContentHolder.svelte';
	import Footer from './components/Footer.svelte';

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

	const headerLinkClicked = (event)=>{
		console.log(`Link ID: ${event.detail.id} clicked!`);
	}

</script>

<Header headerInfo={headerInfo} on:headerLinkClicked={headerLinkClicked}></Header>

<main>
	<ContentHolder></ContentHolder>
</main>

<Footer footerInfo={footerInfo}></Footer>

<style>

</style>