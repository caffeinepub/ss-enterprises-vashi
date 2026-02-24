import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type Submission = {
    name : Text;
    mobileNumber : Text;
    email : Text;
    serviceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitForm(name : Text, mobileNumber : Text, email : Text, serviceType : Text, message : Text) : async Text {
    let newSubmission : Submission = {
      name;
      mobileNumber;
      email;
      serviceType;
      message;
      timestamp = Time.now();
    };

    submissions.add(newSubmission);
    "Submission received. Thank you!";
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
