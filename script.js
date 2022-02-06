console.log("asdasdasd")
const url = "https://api.carboncloud.com/v0/search";
function fetch_data() {
    const my_json = fetch(url, {
    method: "GET",
    headers: {
        "X-API-KEY": "95NOSm7wU24EJ3zqf7IN99yFRQkWyhmcThAIwew3"
    }
    }).then(response => {
        console.log(response.json())
        return response;
    })
    return my_json;
}
function parse_data() {
    const my_json = fetch_data();
    console.log(my_json.json());
    console.log(my_json.keys);
}

parse_data();