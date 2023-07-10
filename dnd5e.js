var requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch("https://www.dnd5eapi.co/api/", requestOptions)
    .then((response) => response.text())
    .then((body) => {
        let parsedData = JSON.parse(body);
        displayLists(parsedData);
    });

const displayLists = (data) => {
    console.log(data);
    let abilityScores = data.results[1];
    console.log(abilityScores);
};
