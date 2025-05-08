    
    const desc = document.getElementById("desc")
    const amount = document.getElementById("amount")
    const incomeBtn = document.getElementById("incomeBtn")
    const expenseBtn = document.getElementById("expenseBtn")

    const incomeList = document.getElementById("incomeList")
    const expenseList = document.getElementById("expenseList")
    const transactionList = document.getElementById("transactionList")
    const balance = document.getElementById("balance")

    let myIncome = []

    let myExpense = []

    let myTransactionList = []

// INCOME
    incomeBtn.addEventListener("click", () => {

        if(desc.value !== "" && Number(amount.value) >= 1){

            myTransactionList.push({description: desc.value, amount: Number(amount.value), type: "income",})
            myIncome.push({description: desc.value, amount: Number(amount.value),})
        }
        console.log(myTransactionList)
        console.log(myIncome)
        desc.value = ""
        amount.value = ""
        showLists()
        showSum()
    })


// EXPENSE
    expenseBtn.addEventListener("click", () => {


        if(desc.value !== "" && Number(amount.value) >= 1){

            myTransactionList.push({description: desc.value, amount: Number(amount.value), type: "expense",})
            myExpense.push({description: desc.value, amount: Number(amount.value),})
        }
        console.log(myTransactionList)
        console.log(myExpense)
        desc.value = ""
        amount.value = ""
        showLists()
        showSum()
    })




    function showLists () {

        // income List
        incomeList.innerHTML =""
            for(let income of myIncome){
                const listItem = document.createElement("li")
                listItem.textContent = `${income.description} - ${income.amount} kr`
                incomeList.appendChild(listItem)
         }

        // expense list
        expenseList.innerHTML =""
        for(let income of myExpense){
            const listItem = document.createElement("li")
            listItem.textContent = `${income.description} - ${income.amount} kr`
            expenseList.appendChild(listItem)
        }

        // transactionlist
        transactionList.innerHTML =""
        for(let income of myTransactionList){
            const listItem = document.createElement("li")
            if(income.type === "income"){
                listItem.textContent = `${income.description} - ${income.amount} kr (Inkomst)`
            }else if(income.type === "expense"){
                listItem.textContent = `${income.description} - ${income.amount} kr (Utgift)`
            }
            transactionList.appendChild(listItem)
        }
    }

    function showSum(){
        let sum = 0
        console.log(myTransactionList)
        for(let item of myTransactionList){
            if(item.type === "income"){
                console.log(item.amount)
                sum += Number(item.amount)
            }
            else if(item.type === "expense"){
                console.log(item.amount)
                sum -= Number(item.amount)
            }
        }
        console.log(sum)
        balance.innerHTML = Number(sum)
    }