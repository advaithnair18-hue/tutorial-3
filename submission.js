let even_predicate = function (value)
{
    //Rejects null and undefined values
    if (value === null || value === undefined)
    {
        return false;
    }

    let numberValue = Number(value);

    //Value has to be an integer and divisible by 2
    return !Number.isNaN(numberValue) &&
           Number.isInteger(numberValue) &&
           numberValue % 2 === 0;
};

let odd_predicate = function (value)
{
    //rejects null and undefined values
    if (value === null || value === undefined)
    {
        return false;
    }

    let numberValue = Number(value);

    //Value must be a valid integer and not divisible by 2.
    return !Number.isNaN(numberValue) &&
           Number.isInteger(numberValue) &&
           numberValue % 2 !== 0;
};

let undefined_predicate = function (value)
{
    return value === undefined;
};

let null_predicate = function (value)
{
    return value === null;
};

let check = function (predicate, value)
{
    //Runs the predicate function using the value
    return predicate(value);
};

let getDictionary = function (lang)
{
    //returns english words for 1,2,3
    let englishDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary";
        }
    };

    //returns french word for 1,2,3
    let frenchDictionary = function (number)
    {
        switch (number)
        {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary";
        }
    };

    // converts every word to lowercase to allow capitilization
    lang = lang.toLowerCase();

    //returns the right dictionary function
    if (lang === "e" || lang === "english")
    {
        return englishDictionary;
    }
    else
    {
        return frenchDictionary;
    }
};

//tests english and french dictionary
let english = getDictionary("English");
console.log(english(2));


let french = getDictionary("French");
console.log(french(3));