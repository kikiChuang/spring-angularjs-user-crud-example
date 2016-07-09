describe('UserCrud Application', function () {

    describe('userTable', function () {

        beforeEach(function () {
            browser.get('');
        });

        it('should add one user', function () {

            var phoneList = element.all(by.repeater('user in $ctrl.users'));
            var emailInput = element(by.id('emailInput'));
            var firstnameInput = element(by.id('firstnameInput'));
            var lastnameInput = element(by.id('lastnameInput'));
            var addButton = element(by.id('addButton'));
            var userEmailColumn = element.all(by.repeater('user in $ctrl.users').column('user.email'));
            
            expect(phoneList.length).toBe(undefined);
            

            function getEmails() {
                return userEmailColumn.map(function(elem) {
                    return elem.getText();
                });
            }


            emailInput.sendKeys('email@test');
            firstnameInput.sendKeys('firstname.test');
            lastnameInput.sendKeys('lastname.test');
            addButton.click();
            expect(getEmails()).toEqual(['email@test']);

            var deleteButton = element(by.id('deleteButton1'));
            deleteButton.click();

            expect(getEmails()).toEqual([]);


        });
    });

});
