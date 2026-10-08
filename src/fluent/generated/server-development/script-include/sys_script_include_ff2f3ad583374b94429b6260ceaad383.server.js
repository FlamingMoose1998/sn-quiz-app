var lib = Class.create();
lib.prototype = {
	io: function(){
		gs.include('io');
		return io(...arguments);
	},
    ioQuestion: function() {
        gs.include('ioQuestion');
        return ioQuestion(...arguments);
    }
}