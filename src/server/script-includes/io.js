var io = Class.create()
io.prototype = {
    initialize: function () {},

    insertRecord: function (table, record, fields = null) {
        const fieldList = fields === null ? Object.keys(record) : fields

        const gr = new GlideRecord(table)
        fieldList.forEach((fieldName) => {
            gr.setValue(fieldName, record[fieldName])
        })

        return gr.insert()
    },

    /**
     * Finds the first record for which the field's value matches value
     * and returns its sys_id.
     * If no record is found, a record with that field/value is created.
     * If more than one record matches the query, only the first result is returned.
     * @param {string} table - name of the table to be queried
     * @param {string} field
     * @param {string} value
     * @returns {string} sys_id
     */
    getSysId: function (table, field, value) {
        for (const arg of arguments) {
            if (typeof arg !== 'string') throw new Error(`Argument ${arg} missing or wrong type`)
        }

        const gr = new GlideRecord(table)
        let sysId
        if (gr.get(field, value)) {
            sysId = gr.getValue('sys_id')
        } else {
            gr.setValue(field, value)
            sysId = gr.insert()
        }

        return sysId
    },
}
