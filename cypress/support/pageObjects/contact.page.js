require('cypress-xpath');

export class Contact {
    getInputByName(inputName){
        return cy.xpath(`//*[@placeholder='${inputName}']`)
    }

    getCalendar(){
        return cy.xpath("//div[@class='DateRangePicker DateRangePicker_1']//button").first();
    }

    getArrivalInput(){
        return cy.xpath("//input[@aria-label='Arrival']");
    }

    getDepartureInput(){
        return cy.xpath("//input[@aria-label='Departure']")
    }

    getIsMandotoryMessageByName(inputName){
        return cy.xpath(`//*[@placeholder='${inputName}']/following-sibling::div[text()='${inputName} is mandatory']`)
    }

    getCalendarDayPickRight(){
        return cy.xpath("//div[contains(@class,'DayPickerNavigation_rightButton')]");
    }

    getCalendarMonthLeft(){
        return cy.xpath("//div[@class='CalendarMonth CalendarMonth_1' and @data-visible='true']/div").first();
    }

    getCalendarMonthRight(){
        return cy.xpath("//div[@class='CalendarMonth CalendarMonth_1' and @data-visible='true']/div").last();
    }

    getDayOfMonth(month, day){
        return cy.xpath(`//div[contains(@class,'CalendarMonth_caption') and contains(.,'${month}')]/following-sibling::table//td[contains(., '${day}')]`);
    }

    getSend(){
        return cy.xpath("//button[@type='submit']");
    }

    chooseLeftData(month, day){
        this.getCalendarMonthLeft().then(($el) => { 
            console.log($el.text());
            if(!$el.text().includes(month)){
                this.getCalendarDayPickRight().click();    
                this.chooseLeftData(month, day);
            } 
            else{
                this.getDayOfMonth(month, day).click();
            }
        });
    }

    chooseRightData(month, day){
        this.getCalendarMonthRight().then(($el) => { 
            console.log($el.text());
            if(!$el.text().includes(month)){
                this.getCalendarDayPickRight().click();
                this.chooseRightData(month, day);
            }
            else{
                this.getDayOfMonth(month, day).click();
            } 
        });
    }
}


