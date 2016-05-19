using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Scripting;

using Uno.Compiler.ExportTargetInterop;


//<!-- lesson 15 native api uno -->

public class SystemSounds :NativeModule{


	public SystemSounds(){

		AddMember(new NativeFunction("playNotification",
			(NativeCallback)PlayNotification));
	}

	object PlayNotification(Context c, object[] args){

		PlayNotification();
		return null;
	}

	[Foreign(Language.Java)]
	static extern(Android) void PlayNotification()
	@{

		//foreign code

		android.net.Uri uri=android.media.RingtoneManager.getDefaultUri(
			android.media.RingtoneManager.TYPE_NOTIFICATION);

		android.media.Ringtone ringtone=
		android.media.RingtoneManager.getRingtone(
			com.fuse.Activity.getRootActivity(), uri);

		ringtone.play();

	@}

	static extern(!Android) void PlayNotification(){


		debug_log("play notification not supported on this platform");
	}
}