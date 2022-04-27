window.onload = function () {
    const input = document.querySelector("#cardinput");
    const button = document.querySelector("#submitbutton");
    const cardname = document.querySelector("#cardname");
    const cardtype = document.querySelector("#cardtype");
    const carddesc = document.querySelector("#carddesc");
    const cardprice = document.querySelector("#cardprice");
    const img = document.querySelector("#cardimg");

    function displayImage(src) {
        img.src = src;
    }

    function getCard() {
        let obj;

        fetch(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${input.value.replace(
                / /g,
                "%20"
            )}`
        )
            .then((res) => res.json())
            .then((data) => (obj = data))
            .then(() => {
                cardname.textContent = `Name: ${JSON.stringify(
                    obj.data["0"].name
                )}`;
                cardtype.textContent = `Type: ${JSON.stringify(
                    obj.data["0"].type
                )}`;
                carddesc.textContent = `Description: ${JSON.stringify(
                    obj.data["0"].desc
                )}`;
                cardprice.textContent = `Description: ${JSON.stringify(
                    obj.data["0"].card_prices["0"].cardmarket_price + "$"
                )}`;
                console.log(obj);
                displayImage(obj.data["0"].card_images["0"].image_url);
            });
    }

    button.addEventListener("click", () => {
        console.log(getCard());
    });
};
