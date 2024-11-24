const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.jumpthru,
		C3.Behaviors.MoveTo,
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Behaviors.MoveTo.Cnds.OnArrived
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Sprite2: 0},
	{Solid: 0},
	{platforms: 0},
	{Jumpthru: 0},
	{MoveTo: 0},
	{Sprite4: 0},
	{Sprite: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{floors: 0},
	{Sprite3: 0},
	{TextInput: 0},
	{Text: 0},
	{end: 0},
	{Text2: 0}
];

self.InstanceType = {
	Sprite2: class extends self.ISpriteInstance {},
	platforms: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	floors: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	TextInput: class extends self.ITextInputInstance {},
	Text: class extends self.ITextInstance {},
	end: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {}
}