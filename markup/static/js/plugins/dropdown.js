import {$global} from './global';

(function() {

	class Dropdown {

		constructor(config) {
			this._dropdownClass = config.dropdownClass;
			this._dropdown = config.dropdown;
			this._open = this._dropdown.find(config.open);

			this._active = 'dropdown_open';

			this._openOnClick();
			this._closeOnItemClick();
			this._closeOnBody();
		}

		_openOnClick() {
			this._open.click((e) => {
				if (this._dropdown.hasClass(this._active)) {
					this.close();
					return;
				} else {
					this.close();
				}

				this._dropdown.addClass(this._active);
			});
		}

		_closeOnItemClick() {
			this._dropdown.find('li').click((e) => {
				this.close();
			});
		}

		_closeOnBody() {
			$global.body.click((e) => {
				if (!$(e.target).closest(this._dropdownClass).length) this.close();
			});
		}

		close() {
			$(this._dropdownClass).removeClass(this._active);
		}

	}

	$('.dropdown').each(function() {
		new Dropdown({
			dropdown: $(this),
			dropdownClass: '.dropdown',
			open: '.js-dropdown-open'
		});
	});

})();
